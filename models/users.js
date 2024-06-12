const fs = require('fs')

const p = __dirname.replace("\\models", "\\jsonFiles\\sales.json");

class Users{
    constructor(input) {
        try {
            this.#validation(input)
            
        } catch (err) {
            throw new Error(err)
        }
    }


    #validation(input) {
        console.log("User Validation")
        if (!input.userN) {
            throw new Error("There is an error in user Name")
        }
        this.input=input;
        
        this.#save()
   
    }
    #save() {
console.log("User Being Saved")
       const file= JSON.parse(fs.readFileSync(p,'utf8'))
       file.users.push({...this.input})
       console.log(file)
       fs.writeFileSync(p,JSON.stringify(file))
    }
}
module.exports=Users