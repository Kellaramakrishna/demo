const express= require("express")

const app=express()
app.use(express.json())

app.get("/",async(req,res)=>{
    res.send("HELLO world")
})

app.listen(3000,()=>{
    console.log("Server is Running")
})