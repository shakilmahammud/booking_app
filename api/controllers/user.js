const User = require('../models/User');


module.exports.updateUser =  async(req, res,next) => { 
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updateUser);
    }catch(err) {
        next(err);
    }
}
module.exports.deleteUser =  async(req, res) => { 
    try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Successfully deleted'})
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getByIdUser = async(req, res) => { 
    try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
    }catch(err) {
        res.status(500).json(err);
    }
}
module.exports.getAllUser = async(req, res,next) => { 
    try {
    const user = await User.find({});
    res.status(200).json(user)
    }catch(err) {
        next(err);
    }
}