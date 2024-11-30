const mongoose = require('mongoose');
//  const URI = "mongodb://103.15.228.94/ticket";
const URI =
 process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection succesfull to db");
    }
    catch(error){
        console.error(error);
        process.exit(0);
    }
}

module.exports=connectDb;
