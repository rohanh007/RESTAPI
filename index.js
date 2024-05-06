const express=require("express");
const PORT=3500 || process.env.PORT ;
const app=express();


app.all('/',(req,res)=>{
    console.log("REQUEST", req);
    console.log("RESPONSE" ,res);

    res.send("I'm ready to Work ")
})



app.listen(PORT ,()=>{
    console.log(`App is listen on port ${PORT}`)
})