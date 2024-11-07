const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Main routes
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

// Test routes
router.get('/test/404', userController.testErrors.notFound);
router.get('/test/500', userController.testErrors.serverError);
router.get('/test/validation', userController.testErrors.validation);
router.get('/test/success', userController.testErrors.success);

module.exports = router;