const express = require("express")
const bodyparser = require("body-parser")
const app = express()

const { getStorage } = require("firebase/storage");

app.use(bodyparser.json())

const port = 8000

let users=[]

//Path ไปที่ตรงไหน
app.get("/test",(req,res)=>{
 let user = {
  firstname: "test",
  lastname:"eiei",
  age:"14"
 }
  res.json(user)
})

//path = GET /users
app.get("/users",(req,res)=>{
  console.log("test")
  res.json(users)
})

// path = POST /user
app.post("/user",(req,res)=>{
  let user = req.body
  users.push(user)
  res.json({
    message : "add ok",
    user:user
  })
})

app.listen(port,(req,res)=>{

  console.log("http server run at "+ port)
})