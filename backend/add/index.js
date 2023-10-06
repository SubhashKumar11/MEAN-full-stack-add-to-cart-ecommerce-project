require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3002; 
require('./db/db'); //import database connection
const router = require('./routes/router') //to use router
//testing code
// app.get('/',(req,res)=>{
//     res.send("hewllo");
// });
app.use(express.json());
app.use(cors())
app.use(router)
app.listen(port,()=>{
    console.log(`server running at port number: ${port}`);
});

