const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:number,
        required:true,
    },
    maxPeople:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    photos:{
        type:[String],
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model("Room",RoomSchema)