
const Beer = require('./../models/beer')

// function beerGetAll (){
//   return Beer.find({})
// }

// function beerGetById (id){
//   return Beer.findById(id)
// }

function create (beerName, beerCost, beerProducer, beerLocation ) {
  return Beer.create({beerName, beerCost, beerProducer, beerLocation})
}


function deleteById (id) {
  return Beer.findByIdAndDelete(id)
}

function updateById(id, beerName, beerCost, beerProducer, beerLocation){
  return Beer.findByIdAndUpdate(id, {beerName, beerCost, beerProducer, beerLocation})
}

module.exports = {
  // beerGetAll,
  // beerGetById,
  create,
  deleteById,
  updateById

}