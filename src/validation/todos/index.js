const { VALIDATION_ERR } = require('../../constants/errorType');
const InvariantError = require('../../exceptions/InvariantError');

const { createTodos, updateTodos } = require('./schema');

const todosValidation = {
    validateCreateTodosPayload: (payload) => {
        const validationResult = createTodos.validate(payload);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message, {
                type: VALIDATION_ERR,
            });
        }
    },

    validateUpdateTodosPayload: (payload) => {
        const validationResult = updateTodos.validate(payload);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message, {
                type: VALIDATION_ERR,
            });
        }
    },
};

module.exports = todosValidation;
