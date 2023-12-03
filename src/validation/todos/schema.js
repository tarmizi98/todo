const Joi = require('joi');
const STATUS = require('../../constants/status');

exports.createTodos = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid(...Object.values(STATUS)).required(),
    dueDate: Joi.string().required(),
})

exports.updateTodos = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string().valid(...Object.values(STATUS)),
    dueDate: Joi.string().required(),
})