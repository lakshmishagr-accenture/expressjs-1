const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create
router.post('/', userController.createUser);

// Read all
router.get('/', userController.getUsers);

// Read one
router.get('/:id', userController.getUserById);

// Update
router.put('/:id', userController.updateUser);

// Delete
router.delete('/:id', userController.deleteUser);

module.exports = router;
