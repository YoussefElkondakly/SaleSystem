const express = require('express');
const route= express.Router();
const controller=require('../controller/salecontrollers')



route.get('',controller.viewSales)
route.get('/total',controller.totalSale)
route.get('/deleted',controller.deletedSalesStatistics)
route.get('/hot',controller.bestSeller)
route.post('',controller.postAddSale)

module.exports = route;