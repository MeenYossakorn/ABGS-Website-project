const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token); // ตรวจสอบ token และดึง UID
    req.uid = decodedToken.uid; // เก็บ UID ของผู้ใช้ที่ล็อกอินอยู่
    next(); // ทำงานต่อไป
  } catch (error) {
    res
      .status(401)
      .json({ message: "Unauthorized", errorMessage: error.message });
  }
};

//ดึงข้อมูล User มาเเสดง
app.get("/users/profile", checkAuth, async (req, res) => {
  try {
    // ดึงข้อมูลผู้ใช้จาก Firestore โดยใช้ UID ที่ได้จาก token
    const userRef = db.collection("users").doc(req.uid);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "User not found" });
    }
    // ดึงข้อมูลผู้ใช้จาก Firestore
    const userData = doc.data();
    // ส่งข้อมูลผู้ใช้กลับไปที่ frontend
    res.status(200).json(userData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user data", error: error.message });
  }
});

//Register new user
app.post("/users/register", async (req, res) => {
  const { name, surname, email, telephone, password } = req.body.formData || "";
  try {
    if (!(name && surname && email && telephone && password)) {
      return res.status(400).json({
        message: "please fill in all fields.",
      });
    }

    // ตรวจสอบว่าอีเมลมีอยู่แล้วหรือไม่
    try {
      const existingUser = await admin.auth().getUserByEmail(email);
      // ถ้ามีผู้ใช้อีเมลนี้อยู่แล้ว
      return res.status(400).json({
        status: "failed",
        message: "Email already exists.",
      });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // ถ้าไม่มีผู้ใช้อีเมลนี้ก็สร้างใหม่
        const userRecord = await admin.auth().createUser({
          email: email,
          password: password,
          displayName: `${name} ${surname}`,
        });

        // บันทึกข้อมูลลงใน Firestore
        await db.collection("users").doc(userRecord.uid).set({
          uid: userRecord.uid,
          name: name,
          surname: surname,
          email: email,
          role: "user",
          telephone: telephone,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        // สร้าง token และส่งกลับไปยัง frontend
        const token = await admin.auth().createCustomToken(userRecord.uid);
        return res.status(200).json({
          status: "success",
          message: "Data saved",
          uid: userRecord.uid,
          token: token,
          email: userRecord.email,
        });
      } else {
        throw error; // หากเป็น error อื่นๆ ให้ส่งกลับไปยัง catch block
      }
    }
  } catch (error) {
    console.log(error.message);
    console.log("error");
    return res.status(500).json({ status: "failed", error: error.message });
  }
});

//Login user
app.post("/users/login", async (req, res) => {
  const { email, password } = req.body || "";
  try {
    if (!(email && password)) {
      return res.status(400).json({
        message: "please fill in all fields.",
      });
    }
    const userRecord = await admin.auth().getUserByEmail(email);
    // สร้าง Custom Token
    const token = await admin.auth().createCustomToken(userRecord.uid);
    return res.status(200).json({
      status: "success",
      uid: userRecord.uid,
      email: userRecord.email,
      token: token,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ status: "failed", error: error.message });
  }
});

app.post("/users/signInCar", async (req, res) => {
  const {
    name,
    surname,
    province,
    brand,
    color,
    licensePlate,
    driverLicense,
    role,
    userId,
  } = req.body.formData || "";

 

  try {
    // ตรวจสอบข้อมูลที่จำเป็นว่าครบถ้วนหรือไม่
    if (
      !(
        name &&
        surname &&
        province &&
        brand &&
        color &&
        licensePlate &&
        driverLicense &&
        role
      )
    ) {
      return res.status(400).json({
        message: "Please fill in all fields.",
      });
    }

    // const userCarData = {
    //   uid: userID,
    //   name: name,
    //   surname: surname,
    //   province: province,
    //   brand: brand,
    //   color: color,
    //   licensePlate: licensePlate,
    //   driverLicense: driverLicense,
    //   role: role,
    //   // createdAt: admin.firestore.FieldValue.serverTimestamp(),
    // };

    // เพิ่มข้อมูลลง Firestore โดยใช้ uid เป็น document ID // merge: true เพื่อไม่ลบข้อมูลที่มีอยู่แล้ว
    await db.collection("carsRequest").doc().set(
      {
        
        name: name,
        surname: surname,
        province: province,
        brand: brand,
        color: color,
        licensePlate: licensePlate,
        driverLicense: driverLicense,
        role: role,
        userId:userId,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    // ส่งสถานะกลับหลังจากบันทึกข้อมูลสำเร็จ
    return res.status(200).json({
      status: "success",
      name: name,
      surname: surname,
    });
  } catch (error) {
    console.error("Error saving user car data: ", error);
    return res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
});

app.get("/users/checkRole", async (req,res)=>{
  try {
    console.log(req.body)
    const {userId} = req.body || ""

    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const userData = doc.data();
    const userRole = userData.role;
    
    res.status(200).json({status: "success",userRole:userRole} );
  } catch (error) {
     console.log(error)
    res
      .status(500)
      .json({ message: "Error fetching user data", error: error.message });
     
  }

});

app.listen(port, (req, res) => {
  console.log("http server run at " + port);
});
