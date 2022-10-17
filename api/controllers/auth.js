const User = require("../models/User");
const bcrypt = require('bcrypt');
const createError = require('../utils/error');
module.exports.register = async(req, res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    try{
      const newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password:hashPassword,
        }  
      )
      await newUser.save()
      res.status(200).send("user has been registered successfully")
    }catch(err){
        next(err);
    }
}
module.exports.login = async(req,res,next)=>{
    try{
      const user = await User.findOne({username: req.body.username})
       if(!user)return next(createError(404,"user not found"));
       const isPassword =await bcrypt.compare(req.body.password,user.password);
       if(!isPassword)return next(createError(404,"user email or password incorrect"));
       const {password,isAdmin,...othersDetails} =user._doc;
      res.status(200).json(othersDetails);
    }catch(err){
        next(err);
    }
}