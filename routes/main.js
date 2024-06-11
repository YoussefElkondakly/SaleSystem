const express = require('express');
const route= express.Router();
const controller=require('../controller/salecontrollers')

route.get('/',controller.home)

route.get('/sales',controller.viewSales)
route.post('/sales',controller.postAddSale)



route.get('/sale/:id',controller.saleStatics)
route.patch('/sale/:id',controller.updateSale)
route.delete('/sale/:id',controller.deleteSale)



module.exports = route;
