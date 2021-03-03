
const Beer = require('./../models/beer')

function create (beerName, beerCost, beerProducer, beerLocation ) {
  return Beer.create({beerName, beerCost, beerProducer, beerLocation})
}

function deleteById (id) {
  return Beer.findByIdAndDelete(id)
}

function updateById(id, beerName, beerCost, beerProducer, beerLocation){
  return Beer.findByIdAndUpdate(id, {beerName, beerCost, beerProducer, beerLocation})
}

function getAll (){
   return Beer.find({})
}

function getById (id){
   return Beer.findById(id)
 }

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}