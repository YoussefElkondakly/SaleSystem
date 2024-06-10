const fs=require('fs')
const Sale=function( id,modelName,transactions,inventory,reports,userName){
this.id=id
this.modelName=modelName
this.transactions=[transactions]
this.inventory=[inventory]
this.reports=[reports]
this.userName=userName
}
const path=__dirname+'/sale.json'

Sale.prototype.save=function(val,p=path){fs.readFile(p,(err,data)=>{
    if(err?.errno){
        //if the file does not exist
        fs.writeFile(p,JSON.stringify([]),()=>console.log("File Written"))
    }else{
        const oldat=JSON.parse(data)
        oldat.push(val)
        fs.writeFile(p,JSON.stringify(oldat),(err)=>{console.log(err)})
    }
})}


module.exports=Sale

