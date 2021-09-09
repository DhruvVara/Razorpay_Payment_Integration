const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const Razorpay = require("razorpay");
const shortid = require("shortid");
const cors = require("cors");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();


app.use(bodyparser.json());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

const razorpay = new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.SECRET
})

app.get("/",(req,res)=>{
    res.send("Server Side");
})

// app.post("/verification",(req,res)=>{

//     const secret = "0987654321";
//     console.log(req.body);

//     const shasum = crypto.createHmac('sha256',secret);
//     shasum.update(JSON.stringify(req.body));
//     const digest = shasum.digest('hex');

//     console.log(digest, req.headers['x-razorpay-signature'])

//     res.json({status:"ok"});
// })

app.post("/razorpay", async  (req,res)=>{

    const payment_capture=1;
    const amount = 500;
    const currency = "INR";

    const options = {
        amount:amount*100,
        currency,
        receipt:shortid.generate(),
        payment_capture
    }

    try{
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount

    })
    }catch(err){
        console.log(err)
    }
})

if(process.env.NODE_ENV =="production"){
    app.use(express.static("frontend/build"));
}


app.listen(port,()=>{
    console.log("Running in 5000");
})