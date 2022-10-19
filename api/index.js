// import all packages 
const { config } = require('dotenv');
const  express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();

require('dotenv').config();

// mongodb connection
const connect = async ()=> {
try {
   await mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("Connected to MongoDB");
})}catch(e){console.log("Failed to connect to MongoDB")};
};
// mongodb disconnected 
mongoose.connection.on('disconnect',()=>{
    console.log('MongoDB disconnected');
});
app.use(cookieParser())
app.use(express.json());
const hotelRoute = require("./routes/hotels");
const authRoute = require("./routes/auth");
app.use("/api/hotel",hotelRoute);
app.use("/api/auth",authRoute);
app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMsg = err.message || "something  wrong"
    return res.status(errStatus).json(
        {
            success: false,
            status: errStatus,
            message: errMsg,
            stack: err.stack
        }
    )
    
});
app.listen(process.env.PORT,()=>
{   
        connect();
       console.log('listening on port '+process.env.PORT);
});