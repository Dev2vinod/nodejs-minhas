import express from 'express'


import bodyParser from 'body-parser'; // come from express docs

//  mongodb+srv://admin:admin123@cluster0.bqm1q.mongodb.net/ 

 


const app = express()
const port = 3000 



app.use(bodyParser.urlencoded({ extended: false })) // this is body parser this shuld be apply to get body data

// parse application/json
app.use(bodyParser.json())


// import("dotenv").config()
import 'dotenv/config' // es6 module to import 

import mongoose from 'mongoose';
const dbUrl =process.env.ConnectionString //connection string

//  console.log("dburl",dbUrl)

 mongoose.connect(dbUrl)

 const db =mongoose.connection

 db.once('open',()=>{
  console.log("MONGODB CONNECT")
 })
  
  db.on("error",()=>{
    console.log("mongodb connection error")
  })


 // slash(/) means root path   www.google se sara data aata  hai 
app.get('/', (req, res) => {
  res.send({
    "name":"vinod",
    "class":"minhas"
  })
})

  // this will be send by postman 
 app.post('/user',(req,res)=>{

   const{email,password,name} =req.body
  res.send({email,password,name})
  console.log(req.body,"this is body parser")

    
 })

//  console.log("chal raha kya mera server")
 // iss port par chal raha hai
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
