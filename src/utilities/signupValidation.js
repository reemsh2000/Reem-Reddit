const Joi = require('joi');

const signupValidation = Joi.object({
  username: Joi.string().min(4).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),

});
module.exports = signupValidation;
