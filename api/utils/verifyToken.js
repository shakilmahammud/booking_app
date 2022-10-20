const jwt = require('jsonwebtoken');
const createError = require('../utils/error');

module.exports.verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not Authorize"))
    }
    jwt.verify(token,process.env.JWt,(err,user) =>{
        if(err) return next(createError(403,"Token is invalid"))
        req.user = user;
        next()
    })
}

module.exports.verifyUser = (req, res,next) =>{
    this.verifyToken(req, res,next,()=>{
    if(req.user.id===req.params.id || user.isAdmin){
        next()
    }else{
        if(err) return next(createError(401,"Your are not authentication"))
    }
})
}
module.exports.verifyAdmin = (req, res,next) =>{
    this.verifyToken(req, res,next,()=>{
        console.log(req.user.isAdmin)
    if(req.user.isAdmin){
        next()
    }else{
       return next(createError(401,"Your are not authentication"))
    }
})
}