// import all packages 
const { config } = require('dotenv');
const  express = require('express');
const mongoose = require('mongoose');
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

app.listen(process.env.PORT,()=>
{   
        connect();
       console.log('listening on port '+process.env.PORT);
});