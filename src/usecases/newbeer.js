
const Beer = require('./../models/newbeer')

// function beerGetAll (){
//   return Beer.find({})
// }

// function beerGetById (id){
//   return Beer.findById(id)
// }

function beerCreate (beerName, beerCost, beerProducer, beerLocation ) {
  return Beer.create({beerName, beerCost, beerProducer, beerLocation})
}


// function beerDeleteById (id){
//   return Beer.finByIdAndDelete(id)
// }

// function beerUpdateById(id, email, userName){
//   return Beer.findByIdAndUpdate(id, {email, userName})
// }

module.exports = {
  // beerGetAll,
  // beerGetById,
  beerCreate,
  // beerDeleteById,
  // beerUpdateById

}