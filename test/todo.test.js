const server = require('./../app')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

describe('User Endpoint /users GET', () => {
    it('should list 3 users with default pagination', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                chai.expect(res.body.data.length).equal(3)
                res.body.should.be.a('object')
            })

        done()
    })
})