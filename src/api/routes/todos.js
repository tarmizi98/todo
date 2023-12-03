const TodosController = require('../controller/todos.controller');
const router = require('express').Router();

router.post('/', TodosController.createTodos);
router.put('/:id', TodosController.updateTodos);
router.delete('/:id', TodosController.deleteTodos);
router.get('/', TodosController.getAllTodos);
router.get('/:id', TodosController.getTodosById);

module.exports = router;