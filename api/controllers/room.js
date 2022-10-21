const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

module.exports.createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
        const saveRoom = await newRoom.save();
        try{
           const ht= await Hotel.findByIdAndUpdate(hotelId,{
            $push:{rooms:saveRoom._id}
           })
           
        }catch(err){
            next(err)
        }
        res.status(200).json(saveRoom)
    }catch(err){
        next(err)
    }
}

module.exports.updateRoom =  async(req, res,next) => { 
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updateRoom);
    }catch(err) {
        next(err);
    }
}
module.exports.deleteRoom =  async(req, res) => { 
    const hotelId = req.params.hotelId
    try {
    await Room.findByIdAndDelete(req.params.id);
    try{
        await Hotel.findByIdAndUpdate(hotelId,{
         $pull:{rooms:req.params.id}
        })
        
     }catch(err){
         next(err)
     }
    res.status(200).json({message:'Successfully deleted'})
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getByIdRoom = async(req, res) => { 
    try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room)
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getAllRoom = async(req, res,next) => { 
    try {
    const rooms = await Room.find({});
    res.status(200).json(rooms)
    }catch(err) {
        next(err);
    }
}