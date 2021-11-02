let users = require('./../data/users.json')
const { writeFile } = require('fs');
const path = __dirname + '/../data/users.json';

exports.findAll = () => {
    return users;
}

exports.findOneById = (id) => {
    return users.find(user => user.id == id);
}

exports.create = (newUser) => {
    newUser.id = String(users.length + 1);
    newUser.status = true;
    users.push(newUser)
    writeFile(path, JSON.stringify(users, null, 4), (err) => {
        if(err){
            console.log('error when write the json')
            return
        }
    })
    return newUser
}

exports.delete = (id) => {
    if(users.find(user => user.id === id)) {
        writeFile(path, JSON.stringify(users.filter(user => user.id !== id), null, 4), (err) => {
            if(err){
                console.log('error when write the json')
                return
            }
        })
        return true
    }
    return false
}