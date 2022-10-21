const express = require('express');
const { createRoom, updateRoom, deleteRoom, getByIdRoom, getAllRoom } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyToken');
const router =express.Router();
//Create
router.post('/:hotelId',verifyAdmin,createRoom);
//update
router.put('/:id',verifyAdmin,updateRoom);
//delete
router.delete('/:id/:hotelId',verifyAdmin,deleteRoom);
//get
router.get('/:id',getByIdRoom);
//get all
router.get('/', getAllRoom);

module.exports=router;