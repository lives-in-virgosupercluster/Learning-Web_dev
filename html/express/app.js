const express=require("express");
const app=express();
const path=require("path");
const port=80;
// for serving templates
app.use("/static",express.static("static"));
//setting the template engine as pug
app.set("view engine",'pug');
//Set the views directory
app.set("views",path.join(__dirname,"views"));
app.get("/demo",(req,res)=>{
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
})

app.get("/",(req,res)=>{
    res.send("this is my first express app with harsh");
})
app.get("/about",(req,res)=>{
    res.send("this is my about express app with harsh");
})
app.post("/about",(req,res)=>{
    res.send("post kar rhe ho tum");
})
app.post("/this",(req,res)=>{
    res.status(200).send("post kar rhe ho tum");

})
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})