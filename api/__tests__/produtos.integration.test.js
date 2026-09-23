const request = require("supertest");
const createApp = require("../app")

describe('API /produtos testes de integração', () =>{
    let app;

    beforeEach(() => {
        app = createApp()
    })

    describe('GET /produtos', () => {
        test("retorna 200 e um array com os produtos inciais", async () => {
            const res = await request(app).get("/produtos");


            expect(res.status).toBe(200)
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(3)
        })



        //criar caso de test
    })
})