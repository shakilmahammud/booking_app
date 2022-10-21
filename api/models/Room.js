const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },

    roomNumbers:[{number:Number,unavailableDate:{type:[Date]}}]
},{timestamps:true}
);

module.exports = mongoose.model("Room",RoomSchema)