const userService = require('./../services/user.service')
const {baseResponsePagination, baseResponse} = require('./../utils/helper/response')

exports.getAllUser = async (req, res) => {
    const users = userService.findAll()
    const limit = req.query.limit
    const page = req.query.page
    return res.json(baseResponsePagination({data:users, limit, page}))
}

exports.createUser = async (req, res) => {
    const users = userService.create(req.body)
    return res.status(201).json(baseResponse({data:users, message:'success create user'}))
}

exports.deleteUser = async (req, res) => {
    const users = userService.delete(req.params.id)
    if(users) {
        return res.status(204).json()
    }
    return res.status(404).json(baseResponse({message:`user with the id ${req.params.id} not found!`}))
}