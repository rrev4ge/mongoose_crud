const {Router} = require('express');
const animalRouter = require('./animalRouter');
const zooRouter = require('./zooRouter');

const router = new Router();

router.use('/animals', animalRouter)
router.use('/zoo', zooRouter)

module.exports = router;