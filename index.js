const bodyParser = require("body-parser");
const express=require("express");
const PORT=3500 || process.env.PORT ;
const app=express();

 app.use(bodyParser.json());

const todolist=[{
    id:1,
    work:"wakeup",
}]
app.all('/',(req,res)=>{
    console.log("REQUEST", req);
    console.log("RESPONSE" ,res);

    res.send("I'm ready to Work ")
})

app.get('/todos',(req,res)=>{
  
    res.send(todolist);

})

app.post('/todos', (req,res)=>{
       const newdata=req.body ;

       todolist.push(newdata);

       res.send({
         msg:"data is added succesfully "
       })
})

app.put('/todos/:id',(req,res)=>{
    const newdata=req.body ;
    const urlid=req.params.id;

    const updatedata=todolist.findIndex((td)=>{
        td.id==urlid 
    })

    if(urlid!==-1)
        {
            todolist[updatedata]={
                id:req.params.id,
                ...newdata ,
            }
        }

   res.json({
     message:"data is added successfully "
   })     
})

app.delete('todos/:id' , (req,res)=>{
    const todoparamid=req.params.id;

    const todoindex=todolist.findIndex(td=>td.id==req.params.id);

    if(todoindex!==-1)
        {
            todolist.splice(todoindex ,1);
        }


    res.json({
        message:"data is deleted" ,
    })

})



app.listen(PORT ,()=>{
    console.log(`App is listen on port ${PORT}`)
})