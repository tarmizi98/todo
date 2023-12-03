const { successResponse } = require('../../lib/response');
const TodoService = require('../../services/todo');
// const InvariantError = require('../../exceptions/InvariantError');
// const { VALIDATION_ERR } = require('../../constants/errorType');
// const { STATUS } = require('../../constants/status');
const { todosValidation } = require('../../validation/todos')

class TodosController {
    static createTodos = async (req, res, next) => {
        try{
            todosValidation.validateCreateTodosPayload(req.body);
    
            const userId = req.user.id;
            const todos = await TodoService.create(userId, req.body);
    
            return res.status(201).json(successResponse({
                message: 'Todo created successfully',
                data: {
                    title: todos.title,
                }
            }))
        } catch (error) {
            next(error);
        }
    }

    static updateTodos = async (req, res, next) => {
        try {
            todosValidation.validateUpdateTodosPayload(req.body);
    
            const { id } = req.params;
            const todos = await TodoService.update(id, req.body);
    
            return res.status(200).json(successResponse({
                message: 'Todo updated successfully',
                data: {
                    title: todos.title,
                }
            }))
        } catch (error) {
            next(error);
        }
    }

    static deleteTodos = async (req, res, next) => {
        try {
            const { id } = req.params;
            const todos = await TodoService.delete(id);
    
            return res.status(200).json(successResponse({
                message: 'Todo deleted successfully',
                data: {
                    title: todos.title,
                }
            }))
        } catch (error) {
            next(error);
        }
    }

    static getAllTodos = async (req, res, next) => {
        try {
            const todos = await TodoService.getAll();
    
            return res.status(200).json(successResponse({
                message: 'Todo fetched successfully',
                data: todos,
            }))
        } catch (error) {
            next(error);
        }
    }

    static getTodosById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const todos = await TodoService.getById(id);
    
            return res.status(200).json(successResponse({
                message: 'Todo fetched successfully',
                data: todos,
            }))
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TodosController;