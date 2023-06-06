const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () =>{
    await request(app).post('/users').send({
        name : 'Bhumin',
        email : 'bhumin@example.com',
        password : 'bhumin@123'
    }).expect(201)
})