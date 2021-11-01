const userRoute = require('./../routes/users')
const router = require('express').Router()

router.use("/users", userRoute)

module.exports = router