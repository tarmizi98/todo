// const AuthController = require('../controllers/auth.controller');

const AuthController = require('../controller/auth.controller');

// const AuthController = require('../controller/auth.controller');

const router = require('express').Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.registerUser);

module.exports = router;