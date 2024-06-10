
const Sale = require('../models/sales');
const fs = require('fs')
const myBadPath = __dirname.replace('\\controller', '\\models\\sale.json')

const read = (controller) => fs.readFile(myBadPath, 'utf8', controller)
exports.home = (req, res) => res.render('home')

exports.addSale = (req, res) => res.render('add-sales')

exports.postAddSale = (req, res) => {
  const body = req.body
  const id = Math.trunc(Math.random() * 100)
  const { modelName, transactions, inventory, reports, userName } = body
  const sale = new Sale(id, modelName, transactions, inventory, reports, userName)
  sale.save(sale)
  res.redirect('../sale/view-sales')
}

exports.viewSales = (req, res) => {
  read((err, data) => {
    if (err) console.error(err)
    else {
      const sales = JSON.parse(data)
      res.render('sales', { data: sales })
    }
  })
}



exports.editSale = (req, res) => {
  read((err, dat) => {
    if (err) console.error(err)
       else {
      let found
      const id = req.params.id
      const sales = JSON.parse(dat)
      console.log("you are here")
      sales.forEach((object, i) => {
        if (object.id === +id) {
          res.render('edit-sales', { data: object });
          found = true
        }
        else found = false
      });
      found === false ? res.render('edit-sales', { data: "not found" }) : null
    }
  })

}
exports.postEditSale = (req, res) => {
  read((err, dat) => {
    if (err) { console.error(err); } else {
      const id = Number(req.body.id)
      let sales = JSON.parse(dat)
      sales.forEach((object, i) => {
        if (object.id === id) {
          let newobject = req.body
          newobject.id = Number(newobject.id)
          sales[i] = { ...newobject }
        }
      });
      fs.writeFile(myBadPath, JSON.stringify(sales), 'utf8', (err) => console.log(err))
      res.redirect('../view-sales')
    }
  })

}


exports.deleteSale= (req, res) => {
read((err,dat)=>{
  if(!err){
const file=JSON.parse(dat)
file.forEach((obj,i)=>{
   if (obj.id === Number(req.params.id)) {
          file.splice(i,1)
        }
})
fs.writeFile(myBadPath, JSON.stringify(file), 'utf8', (err) => console.log(err))
      res.redirect('../../view-sales')
  }else console.log(err);
})
}