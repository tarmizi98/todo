const Joi = require('joi');

exports.login = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});

exports.register = Joi.object({
  name: Joi.string().min(4).max(255).required(),
  password: Joi.string().min(8).required(),
});
