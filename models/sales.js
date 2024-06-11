const fs = require('fs')

const p = __dirname.replace("\\models", "\\jsonFiles\\sales.json");

class Sale {
    constructor(input) {
        try {
            this.#validation(input)

        } catch (err) {
            throw new Error(err)
            // // console.error(err.message)
            // return;
        }
    }


    #validation(input) {
        if (!input.id) {
            throw new Error("There is an error in id")
        } if (!input.modelName) {
            throw new Error("There is an error in modelName")
        } if (!input.transactions) {
            throw new Error("There is an error in transactions")
        } if (!input.inventory) {
            throw new Error("There is an error in inventory")
        } if (!input.reports) {
            throw new Error("There is an error in reports")
        } if (!input.userName) {
            throw new Error("There is an error in userName")
        }
        this.id = input.id
        this.modelName = input.modelName
        this.transactions = [input.transactions]
        this.inventory = [input.inventory]
        this.reports = [input.reports]
        this.userName = input.userName
        this.bol = false
        this.#save()
    }
    #save() {

        fs.readFile(p, (err, data) => {
            if (err?.errno) {
                //if the file does not exist
                fs.writeFile(p, JSON.stringify({ baseData: [this] }), () => console.log("File Written"))
            } else {
                const oldat = JSON.parse(data)
                oldat.baseData.push(this)
                fs.writeFile(p, JSON.stringify(oldat), (err) => { console.log(err || "Your Data Has Been Saved") })
            }
        })
    }
}

module.exports = Sale

