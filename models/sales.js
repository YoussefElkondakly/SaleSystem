const fs = require('fs')
const User=require('./users')
const p = __dirname.replace("\\models", "\\jsonFiles\\sales.json");

class Sale {
    constructor(input) {
        try {
            this.#validation(input)
            
        } catch (err) {
            throw new Error(err)
        }
    }


    #validation(input) {
        if (!input.id) {
            throw new Error("There is an error in id")
        } if (!input.modelName) {
            throw new Error("There is an error in modelName")
        } if (!input.price||Number(input.price).toString()==='NaN') {
            throw new Error("There is an error in price")
        } if (!input.count||Number(input.count).toString()==='NaN') {
            throw new Error("There is an error in count")
        }if(!input.userName){
            throw new Error("There is an error in userName")
        }
        this.input=input;
        
        this.#save()
   
    }
    #save() {
        console.log("welcome to save Sales")
        fs.readFile(p, (err, data) => {
            const {id,modelName,price, count,userName}={...this.input}
            if (err?.errno) {
                fs.writeFile(p, JSON.stringify({ baseData: [{id,modelName,price, count,userName}],users:[] }), () => console.log("File Written"))
            } else {
             
                let oldat = JSON.parse(data)
                
             const [findUser]= oldat.users.filter(el=>el.userN===userName)
             //null or true
             if(!findUser){
                console.log("welcome to undefiend Block")
                new User({userN:userName})
                process.nextTick(()=>{
                    console.log("Hello After User Created")
                oldat=JSON.parse(fs.readFileSync(p,'utf8'))
                oldat.baseData.push({id,modelName,price, count,userName})  
            fs.writeFile(p, JSON.stringify(oldat), (err) => { console.log(err || "Your Data Has Been Saved") })
                })
             }else{
                oldat.baseData.push({id,modelName,price, count,userName})  
            fs.writeFile(p, JSON.stringify(oldat), (err) => { console.log(err || "Your Data Has Been Saved") })
}
     
                

                //TODO I want to filter the object from any Dummy Data
                //  dummyProperty:dummyData remove this dummy and 
                // Before Saving 
                // oldat.baseData.push({...this.input})
                //after this invoke NOTE Our File is Safe Now

            }
        })
    }
}


module.exports = Sale

