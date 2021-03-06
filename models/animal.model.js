const mongoose = require('mongoose');
const yup = require('yup');

const { Schema } = mongoose;

const validateEmailSchema = yup.string().email()

const animalSchema = new Schema({
    genus: String,
    species: String, 
    name: {
      type:String,
      required:true
    },
    email: {
      type: String,
      unique:true,
      required:true,
      validate:{
        validator: value => validateEmailSchema.isValidSync(value)
      }
    },
    limbs_count: Number,
    birthday: Date,
    zoo: [{ type: Schema.Types.ObjectId, ref: 'Zoo' }]
    }
  );

const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal;