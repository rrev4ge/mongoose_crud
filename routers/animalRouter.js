const { Router } = require('express');
const { animalController } = require('./../controllers');

const animalRouter = new Router();

animalRouter
  .route('/')
  .post(animalController.createAnimal)
  .get(animalController.getAllAnimals);

animalRouter
  .route('/:animalId')
  .get(animalController.getAnimal)
  .patch(animalController.updateAnimal)
  .delete(animalController.deleteAnimal);

module.exports = animalRouter;
