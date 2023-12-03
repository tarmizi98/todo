const router = require('express').Router();

const authRoute = require('./api/routes/auth.routes');
const todosRoute = require('./api/routes/todos');

router.use('/api/auth', authRoute);
router.use('/api/todos', todosRoute);

module.exports = router;