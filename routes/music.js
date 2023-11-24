const express = require('express');
const router = express.Router();

const usersController = require('../controllers/music');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createUser);

router.put('/', usersController.updateUser);

router.delete('/', usersController.deleteUser);

module.exports = router;