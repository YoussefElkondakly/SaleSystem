const express = require('express');
const route= express.Router();
const controller=require('../controller/salecontrollers')

route.get('/',controller.home)
route.get('/sale',controller.addSale)
route.post('/add-sale',controller.postAddSale)
route.get('/view-sales',controller.viewSales)

route.get('/sale/edit/:id',controller.editSale)
route.post('/sale/edit-sale',controller.postEditSale)

route.get('/sale/delete/:id',controller.deleteSale)

module.exports = route;
