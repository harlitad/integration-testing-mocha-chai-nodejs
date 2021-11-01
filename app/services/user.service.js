const users = require('./../data/users.json')

exports.findAll = () => {
    return users;
}

exports.findOneById = (id) => {
    return users.find(user => user.id == id);
}

exports.create = (newUser) => {
    newUser.id = String(Number(users.length) + 1);
    newUser.status = true;
    users = users.push(newUser)
    return newUser
}