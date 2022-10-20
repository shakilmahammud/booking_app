const express = require('express');
const { updateUser, deleteUser, getByIdUser, getAllUser } = require('../controllers/user');
const { verifyUser, verifyToken, verifyAdmin } = require('../utils/verifyToken');
const router =express.Router();

//checkUser
router.get('/checkUser',verifyToken,(req, res, next) => {
    res.send("hello you are login")
});
// //getUserVerifyById
// router.get('/checkuser/:id',verifyUser,(req, res, next) => {
//     res.send("hello you are great")
// });
// //AdminVerify
// router.get('/checkadmin/:id',verifyAdmin,(req, res, next) => {
//     res.send("hello amin")
// });
//update
router.put('/:id',verifyUser,updateUser);
//delete
router.delete('/:id',verifyUser,deleteUser);
//get
router.get('/:id',verifyUser,getByIdUser);
//get all
router.get('/',verifyAdmin, getAllUser);

module.exports=router;