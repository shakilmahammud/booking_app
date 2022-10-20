const express = require('express');
const { createHotel, updateHotel, deleteHotel, getByIdHotel, getAllHotel } = require('../controllers/hotel');
const { verifyAdmin } = require('../utils/verifyToken');
const router =express.Router();
//Create
router.post('/',verifyAdmin,createHotel);
//update
router.put('/:id',verifyAdmin,updateHotel);
//delete
router.delete('/:id',verifyAdmin,deleteHotel);
//get
router.get('/:id',getByIdHotel);
//get all
router.get('/', getAllHotel);

module.exports=router;