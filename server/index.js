const express = require('express');
const cors = require('cors');
const app = express()
const port = 8000

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.use(cors());
app.use(express.json())



app.post("/users/register", async (req, res) => {
  const { name, surname, email, telephone, password } = req.body.formData || '';
try {
    if(!(email && password && name&&surname&&telephone)){
      return res.status(400).json({
        message:'please fill in all fields.'
      })
    }

    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: `${name} ${surname}`,
    });

    
    await db
      .collection("users")
      .doc(userRecord.uid)
      .set({
        name: name,
        surname: surname,
        email: email,
        role:'user',
        telephone: telephone,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    return res.status(200).json({ status: "success", message: "data saved" , uid : userRecord.uid});
  } catch (error) {
    console.log(error.message);
    console.log("error");
    return res.status(500).json({ status: "failed" });
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

app.listen(port, (req, res) => {
  console.log("http server run at " + port);
});
