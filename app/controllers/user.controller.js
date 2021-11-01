const userService = require('./../services/user.service')
const {baseResponsePagination} = require('./../utils/helper/response')

exports.getAllUser = async (req, res) => {
    const users = userService.findAll()
    const limit = req.query.limit
    const page = req.query.page
    return res.json(baseResponsePagination({data:users, limit, page}))
}