'use strict';

require('@code-fellows/supergoose');
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const base64 = require('base-64');

describe('Testing basic auth route', () => {

    it('Should respond with a User on POST /signup', async () => {

        const response = await request.post('/signup').send({
            username: 'Nick',
            password: 'test'
        });

        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('Nick');
    });

    it('Should respond with a User on POST /signin', async () => {

        let authString = base64.encode('Nick:test')

        const response = await request.post('/signin').set('Authorization', `Basic ${authString}`);

        expect(response.status).toEqual(200);
        expect(response.body.user.username).toEqual('Nick');
    });
})