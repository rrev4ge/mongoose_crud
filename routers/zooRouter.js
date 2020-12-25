const { Router } = require('express');
const { zooController } = require('./../controllers');

const zooRouter = new Router();

zooRouter
  .route('/')
  .post(zooController.createZoo)
  .get(zooController.getAllZoo);

zooRouter
  .route('/:zooId')
  .get(zooController.getZoo)
  .patch(zooController.updateZoo)
  .delete(zooController.deleteZoo);

module.exports = zooRouter;
