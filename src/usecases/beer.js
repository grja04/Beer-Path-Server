
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


function deleteById (id){
  return Beer.finByIdAndDelete(id)
}

function updateById(id, email, userName){
  return Beer.findByIdAndUpdate(id, {email, userName})
}

module.exports = {
  // beerGetAll,
  // beerGetById,
  create,
  deleteById,
  updateById

}