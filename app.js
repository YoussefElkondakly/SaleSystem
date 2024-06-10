const express=require('express')
const salesRoutes=require('./routes/main')
const  bodyPar = require('body-parser');

const app=express()
app.set('view engine','ejs')
app.use(bodyPar.urlencoded({ extended: false }));
app.use('/sale',salesRoutes)
app.listen(9922)