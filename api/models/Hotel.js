const mongoose = require('mongoose');
const {Schema} = mongoose

const Hotel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    city:{
        type:String,
        required:true,
        trim:true,
    },
    distance:{
        type:String,
        required:true,
        trim:true,
    },
    photos:{
        type:String,
        required:true,
        trim:true,
    }
})