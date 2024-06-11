const Sale = require("../models/sales");
const fs = require("fs");

const path = __dirname.replace("\\controller", "\\jsonFiles\\sales.json");
const file = JSON.parse(fs.readFileSync(path, 'utf8'))
const change=function(val){fs.writeFile(path, JSON.stringify(val), "utf8", (err) =>console.log(err))};
exports.home = (req, res) => res.status(200).json({
  status: 200,
  message: "Welcome to the Sales API",
});

// exports.addSale = (req, res) => res.render("add-sales");
exports.viewSales = (req, res) => {
  res.status(200).json({ message: "Here Is the sales", sales: file })
};

exports.postAddSale = (req, res) => {
  const body = req.body;
  const id = Math.trunc(Math.random() * 100);
  try {
    console.log({ id: id, ...body })
    const sale = new Sale({ id: id, ...body });
    res.status(201).json({
      message: "A New Sale Made",
      sale: sale
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message, })
  }
};



exports.saleStatics = (req, res) => {
  let found;
  const id = req.params.id;
  const sales = file;
  const sale = sales.baseData.find(el => el.id === +id)
  if (sale) {
    res.status(200).json({ status: 200, message: "Ok", sale })
    found = true;
  } else found = false;

  found === false ? res.status(404).json({ status: 404, message: `This ${id} Not Found` }) : null;
}

exports.updateSale = (req, res) => {
  //الصراحة مش عاجبني
  const updatedDat = req.body
  let found;
  const id = req.params.id;
  let sales = file;
  const index = sales.baseData.findIndex(el => el.id === +id)
  console.log(index)
  if (index === 0 || index !== -1) {
    const update = Object.assign(sales.baseData[index], updatedDat)
    sales.baseData[index] = update
    change(sales)
    found = true;
    res.status(200).json({ status: 200, message: "‘Updeted Successfully", sale:update })

  } else found = false;

  found === false ? res.status(404).json({ status: 404, message: `This ${id} Not Found` }) : null;
}

exports.deleteSale = (req, res) => {
  //الصراحة مش عاجبني
  let found;
  const id = req.params.id;
  let sales = file;
  const index = sales.baseData.findIndex(el => el.id === +id)
  if (index === 0 || index !== -1) {
    sales.baseData.splice(index, 1)
change(sales)
    found = true;
    res.status(204).json({ status: 204, message: "Deleted Successfully", sale:null })
  } else found = false;

  found === false ? res.status(404).json({ status: 404, message: `This ${id} Not Found` }) : null;
}


// exports.deletedSalesStatistics = (req, res) => {
//   read((err, dat) => {
//     if (!err) {
//       const file = JSON.parse(dat);
//       file.filter
//     } else console.log(err);
//   });
// };

// exports.buy = (req, res) => {
//   read((err, dat) => {
//     if (!err) {
//       const file = JSON.parse(dat);
//       file.filter
//     } else console.log(err);
//   });
// };
// buyCount=buyCount++