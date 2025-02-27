const express=require("express")
const { connect } = require("./connect")
const app=express()



app.get("/",async(req,res)=>{
    res.send("Helloooooo..................000000")
})


const port=process.env.PORT
app.listen(port,async()=>{
    try {
        await connect
        console.log(`app is running on http://localhost:${port}`)
        
    } catch (error) {
        console.log(err)
    }
})