const { Animal } = require('./../models');

module.exports.createAnimal = async (req, res, next) => {

  const { body } = req;

  const animalInstance = new Animal(body);
  try {
    const createdAnimal = await animalInstance.save();
    console.log('createdAnimal :>> ', createdAnimal);
    if (createdAnimal) {
      return res.status(201).send({ data: createdAnimal });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }

 }

module.exports.getAllAnimals = async (req, res, next) => {
  
  try {
    const foundAnimals = await Animal.find({});
    console.log('foundAnimals :>> ', foundAnimals);
    if (foundAnimals) {
      return res.status(201).send({ data: foundAnimals });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
 }

module.exports.getAnimal = async (req, res, next) => { 
  const { params: {animalId} } = req;

  try {
    const foundAnimal = await Animal.findById(animalId);
    console.log('foundAnimal :>> ', foundAnimal);
    if (foundAnimal) {
      return res.status(201).send({ data: foundAnimal });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}

module.exports.updateAnimal = async (req, res, next) => { 
    const { body, params: {animalId} } = req;

  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(animalId, body)
    const getThisAnimal = await Animal.findById(animalId)
    console.log('updatedAnimal :>> ', updatedAnimal);
    if (updatedAnimal) {
      return res.status(201).send({ data: getThisAnimal });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}

module.exports.deleteAnimal = async (req, res, next) => { 
  const { params: {animalId} } = req;

  try {
    const removedAnimal = await Animal.findByIdAndRemove(animalId)
    console.log('removedAnimal :>> ', removedAnimal);
    if (removedAnimal) {
      return res.status(200).send({ data: removedAnimal });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}