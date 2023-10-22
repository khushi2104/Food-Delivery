const express=require("express");
const app=express();
const connection=require("./db");
connection();
const port=5000;

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello from server side");
})
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));

app.use(express.json());
app.use('/api', require('./Routes/DisplayItems'));
app.listen(port,()=>{
    console.log(`Listening port no ${port}`)
})