const express = require('express');
const { createHotel, updateHotel, deleteHotel, getByIdHotel, getAllHotel } = require('../controllers/hotel');
const router =express.Router();
const createError = require('../utils/error');
//Create
router.post('/',createHotel);
//update
router.put('/:id',updateHotel);
//delete
router.delete('/:id',deleteHotel);
//get
router.get('/:id',getByIdHotel);
//get all
router.get('/', getAllHotel);

module.exports=router;