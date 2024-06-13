const express = require('express');
const route= express.Router();
const controller=require('../controller/salecontrollers')


route.get('/:id',controller.saleStatics)
route.post('/:id/buy',controller.buy)
route.patch('/:id',controller.updateSale)
route.delete('/:id',controller.deleteSale)

module.exports = route;
