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
             const db = mongoose.connection;

db.once('open', () => console.log('Successfully connected to MongoDB'));
db.on('error', (e) => console.log(e));
         mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
        })
   } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
} 
module.exports=connectDB 