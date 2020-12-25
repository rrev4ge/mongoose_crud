const {Zoo} = require('./../models');

module.exports.createZoo = async (req, res, next) => {

  const { body } = req;

  const zooInstance = new Zoo(body);
  try {
    const createdZoo = await zooInstance.save();
    console.log('createdZoo :>> ', createdZoo);
    if (createdZoo) {
      return res.status(201).send({ data: createdZoo });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }

 }

module.exports.getAllZoo = async (req, res, next) => { 
  try {
    const foundZoo = await Zoo.find({});
    console.log('foundZoo :>> ', foundZoo);
    if (foundZoo) {
      return res.status(201).send({ data: foundZoo });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}

module.exports.getZoo = async (req, res, next) => { 
  const { params: {zooId} } = req;

  try {
    const foundZoo = await Zoo.findById(zooId);
    console.log('foundZoo :>> ', foundZoo);
    if (foundZoo) {
      return res.status(201).send({ data: foundZoo });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}

module.exports.updateZoo = async (req, res, next) => { 
    const { body, params: {zooId} } = req;

  try {
    const updatedZoo = await Zoo.findByIdAndUpdate(zooId, body)
    const getThisZoo = await Zoo.findById(zooId)
    console.log('updatedZoo :>> ', updatedZoo);
    if (updatedZoo) {
      return res.status(201).send({ data: getThisZoo });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}

module.exports.deleteZoo = async (req, res, next) => { 
  const { params: {zooId} } = req;

  try {
    const removedZoo = await Zoo.findByIdAndRemove(zooId)
    console.log('removedZoo :>> ', removedZoo);
    if (removedZoo) {
      return res.status(200).send({ data: removedZoo });
    }
    res.status(400).send('Bad request')
  }
  catch (err) {
    next(err)
  }
}