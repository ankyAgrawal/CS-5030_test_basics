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
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                         if(err) return done(err);
                                        
                         return done();
             })
            });

    test("PUT /",(done)=>{
        request(app).put("/todoupdate")
                    .expect(200)
                     // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                                
                        return done();
        })
    });

             test("DELETE /",(done)=>{
                request(app).delete("/tododelete")
                            .expect(200)
                             // .expect(res.body.todo.length).toEqual(3)
                            .end((err, res)=>{
                                if(err) return done(err);
                                        
                                return done();
                     })
        });
    });