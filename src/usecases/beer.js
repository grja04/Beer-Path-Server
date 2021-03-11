
const Beer = require('./../models/beer')

function create (beerName, beerProducer) {
  return Beer.create({beerName, beerProducer})
}

function deleteById (id) {
  return Beer.findByIdAndDelete(id)
}

function updateById(id, beerName, beerProducer){
  return Beer.findByIdAndUpdate(id, {beerName,  beerProducer})
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