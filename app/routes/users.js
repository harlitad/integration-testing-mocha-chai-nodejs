const router = require('express').Router();
const userController = require('./../controllers/user.controller')

router.get('/', userController.getAllUser)

module.exports = router