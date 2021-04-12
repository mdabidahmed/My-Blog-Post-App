const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});
userSchema.plugin(UniqueValidator);
module.exports = mongoose.model('User', userSchema);
