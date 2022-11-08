const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
                });
    test("POST /",(done)=>{
        request(app).post("/todoadd")
                    .end((err, res)=>{
                       // expect(res.status).toBe(200)
                         if(err) return done(err);            
                         return done();
             })
            });

    test("PUT /",(done)=>{
        request(app).put("/todoupdate")
                    .end((err, res)=>{
                        if(err) return done(err);
                        // expect(res.status).toBe(200)        
                        return done();
        })
    });

    test("DELETE /",(done)=>{
        request(app).delete("/tododelete")
            .end((err, res)=>{
                if(err) return done(err);    
                return done();
        })
    });
});