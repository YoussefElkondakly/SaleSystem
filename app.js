const express=require('express')
const home=require('./routes/main')
const sales=require('./routes/sales')
const sale=require('./routes/sale')

const  bodyPar = require('body-parser');


const app=express()
app.set('view engine','ejs')
// app.use(bodyPar.urlencoded({ extended: false }));
app.use(express.json())
app.use(home)
app.use('/sales',sales)
app.use('/sale',sale)

app.listen(9922)