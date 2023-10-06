//code for db connection
const mongoose  = require('mongoose');
const url = 'mongodb://localhost:27017/angular_productItems';
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connected successfully")
}).catch((error)=>{
    console.log("An error occur while db connection",error)
})