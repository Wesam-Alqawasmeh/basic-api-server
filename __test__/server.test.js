const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

const {db} = require('../src/models/index');



beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.drop();
});

describe('Server testind', () => {

    it('return 404 with invalid request', async() => {
        const res  = await mockRequest.get('/foo');
        expect(res.status).toBe(404);
    });

    it('return 201 with post request', async() => {
        const res  = await mockRequest.post('/car').send({
            comanyName:"kia",
         
             typeName: "forte",
         
             buildingYear: "2020"
        });
        expect(res.status).toBe(201);
    });

    it('return 200 with get all cars request', async() => {
        const res  = await mockRequest.get('/car');
        expect(res.status).toBe(200);
    });

    it('return 200 with get one car request', async() => {
        const res  = await mockRequest.get('/car');
        expect(res.status).toBe(200);
    });


    it('return 201 with put request', async() => {
        const res  = await mockRequest.put('/car/1').send({
            comanyName:"kia",
         
             typeName: "forte",
         
             buildingYear: "2021"
        });
        expect(res.status).toBe(201);
    });

    it('return 204 with delete request', async() => {
        const res  = await mockRequest.delete('/car/1');
        expect(res.status).toBe(204);
    });
})