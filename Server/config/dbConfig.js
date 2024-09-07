const mongoose = require( "mongoose" )
require( "dotenv" ).config()
const asyncHandler=require("express-async-handler")
const MongoDBURL=process.env.MONGO_DB_URL

  async function connectDB () {
     try {
        mongoose.connect(MongoDBURL );
         mongoose.connection.on("error", err => {
             console.log("err", err)
             })
         mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
        })
   } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
} 
module.exports=connectDB 