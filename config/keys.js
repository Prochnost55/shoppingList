var mongoURI =""
if (typeof(process.env.PORT) === 'undefined'){
  mongoURI = "mongodb://localhost:27017/shoppingList"
}else{
  mongoURI = process.env.DB
}
module.exports = {
    mongoURI: mongoURI 
}