const router = require('express').Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUser)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

module.exports = router