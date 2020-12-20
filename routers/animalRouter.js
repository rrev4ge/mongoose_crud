const {Router} = require('express');
const {animalControoller} = require('./../controllers');

const animalRouter = new Router();

animalRouter.post('/', animalControoller.createAnimal);
animalRouter.get('/', animalControoller.getAllAnimals);

animalRouter.route('/:animalId')
  .get(animalControoller.getAnimal)
  .patch(animalControoller.updateAnimal)
  .delete(animalControoller.deleteAnimal)

module.exports = animalRouter;