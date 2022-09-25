const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");
// for storing content in the backend
app.use(express.urlencoded());
const port=80;
// for serving templates
app.use("/static",express.static("static"));
//setting the template engine as pug
app.set("view engine",'pug');
//Set the views directory
app.set("views",path.join(__dirname,"views"));
//setting up endpoints
app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
    const con="this is the best content on the internet";
    const params={"title":"Pubg is the best game","content":con};
    res.status(200).render("index.pug",params)
})
app.post("/",(req,res)=>{
    //const con="this is the best content on the internet";
    name1=req.body.name;
    address=req.body.address;
    age=req.body.age;
    more=req.body.more;
    output=`the name is ${name1} age is ${age} and the address is ${address},about him ${more}`;
    fs.writeFileSync("output.txt",output);
    const param={"title":"pubg is the best game"};
    res.status(200).render("index.pug",param);
    

})
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})