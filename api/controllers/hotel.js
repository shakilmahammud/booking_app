const Hotel = require('../models/Hotel');

module.exports.createHotel = async(req, res,next) => { 
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }catch(err) {
       next(err);
    }
}
module.exports.updateHotel =  async(req, res,next) => { 
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updateHotel);
    }catch(err) {
        next(err);
    }
}
module.exports.deleteHotel =  async(req, res) => { 
    try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Successfully deleted'})
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getByIdHotel = async(req, res) => { 
    try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel)
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getAllHotel = async(req, res,next) => { 
    try {
    const hotel = await Hotel.find({});
    res.status(200).json(hotel)
    }catch(err) {
        next(err);
    }
}