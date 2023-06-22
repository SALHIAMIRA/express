const express = require('express')
const app = express()
const port =5000

const verifyWorkingHours = (req, res, next) => {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
    const currentHour = currentTime.getHours();
  
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour < 17) {
      
      next();
    } else {
      res.status(403).send('This web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };
  

  app.use(verifyWorkingHours);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})
app.get("/home.html",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})
app.get("/Contacts.html",(req,res)=>{
    res.sendFile(__dirname+"/Contacts.html")
})
app.get("/OurServices.html",(req,res)=>{
    res.sendFile(__dirname+"/Services.html")
})
app.get("/Services.html",(req,res)=>{
    res.sendFile(__dirname+"/Style.css")
})
app.get("/digital-marketing-company.jpeg",(req,res)=>{
    res.sendFile(__dirname+"/digital-marketing-company.jpeg")
})
app.get("/cover.css",(req,res)=>{
    res.sendFile(__dirname+"/Style.css")
})
app.listen(port)
