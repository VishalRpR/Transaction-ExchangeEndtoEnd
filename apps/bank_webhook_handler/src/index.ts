import express from "express"
import db from "@repo/db/client"
const app=express();

app.post("/hdfcWebhook",(req,res)=>{

    const paymentinfo={
        token:req.body.token,
        userId:req.body.user_identifier,
        amount:req.body.amount
    }

})
app.listen(4000,()=>{
    console.log("up and running")
})