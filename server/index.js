const express = require("express")
const bodyparser = require("body-parser")


var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const { getStorage } = require("firebase/storage");
const port = 8000
const app = express()
const db = admin.firestore()

app.use(express.json())

let users=[]



app.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const [day, month, year] = req.body.birthday.split("/");
    const birthdayDate = new Date(`${year}-${month}-${day}`);

    await db
      .collection("users")
      .doc("/" + req.body.uid + "/")
      .create({
        uid: req.body.uid,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        birthday: birthdayDate,
        tel: req.body.tel,
        role: "customer",
      });

    return res.status(200).send({ status: "success", message: "data saved" });
  } catch (error) {
    console.log(error.message);
    console.log("error");
    return res.status(500).send({ status: "failed" });
  }
});


// //Path ไปที่ตรงไหน
// app.get("/users",(req,res)=>{
//  let user = {
//   firstname: "test",
//   lastname:"eiei",
//   age:"14"
//  }
//   res.json(user)
// })

// //path = GET /users
// app.get("/users",(req,res)=>{
//   console.log("test")
//   res.json(users)
// })

// // path = POST /user
// app.post("/user",(req,res)=>{
//   let user = req.body
//   users.push(user)
//   res.json({
//     message : "add ok",
//     user:user
//   })
// })

app.listen(port,(req,res)=>{

  console.log("http server run at "+ port)
})