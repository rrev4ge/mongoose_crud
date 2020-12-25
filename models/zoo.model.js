const mongoose = require('mongoose');
const yup = require('yup');

const { Schema } = mongoose;

const validateEmailSchema = yup.string().email()

const zooSchema = new Schema({
    name: {
      type:String,
      required:true
    },
    city: String,
    address: String,
    email: {
      type: String,
      unique:true,
      required:true,
      validate:{
        validator: value => validateEmailSchema.isValidSync(value)
      }
    }
    }
  );

const Zoo = mongoose.model('Zoo', zooSchema);


module.exports = Zoo;