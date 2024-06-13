const express = require('express');
const route= express.Router();
const controller=require('../controller/salecontrollers')

route.get('/',controller.home)

// route.get('/sales',controller.viewSales)
// route.get('/sales/total',controller.totalSale)
// route.get('/sales/deleted',controller.deletedSalesStatistics)
// route.get('/sales/hot',controller.bestSeller)
// route.post('/sales',controller.postAddSale)



// route.get('/sale/:id',controller.saleStatics)
// route.post('/sale/:id/buy',controller.buy)
// route.patch('/sale/:id',controller.updateSale)
// route.delete('/sale/:id',controller.deleteSale)



module.exports = route;
