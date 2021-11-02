const server = require('./../app')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

describe('User Endpoint /users', () => {
    let id
    it('should list 3 users with default pagination', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                chai.expect(res.body.data.length).equal(3)
                res.body.should.be.a('object')
                done()
            })

    })

    it('should create a user and return the new user if success', (done) => {
        chai.request(server)
            .post('/users')
            .send({
                name: 'hello',
                email: 'hello@mail.com'
            })
            .end((err, res) => {
                res.status.should.equal(201)
                res.body.should.have.all.keys('message', 'data')
                res.body.message.should.equal('success create user')
                res.body.data.name.should.equal('hello')
                res.body.data.email.should.equal('hello@mail.com')
                id = res.body.data.id
                done()
            })
    })

    it('should delete a user on /users/<id> DELETE', (done) => {
        chai.request(server)
            .delete(`/users/${id}`)
            .end((err, res) => {
                res.status.should.equal(204)
                done()
            })
    })
})