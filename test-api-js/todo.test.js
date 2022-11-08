

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        //adding two todo list
        todo_service.add_todo({"id": 1, "title": "one", "completed": false});
        todo_service.add_todo({"id": 2, "title": "second", "completed": false});
        //equating the total length
        expect(todo_service.get_todos().todo.length).toEqual(5);
    });
    test("delete_todo", () => {
        todo_service.delete_todo(2);
        //After deleting one item the total length have been updated.
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    test("update_todo", () => {
        //updating existing todo list
        todo_service.update_todo(1, {"id": 1, "title": "first", "completed": false});
        const index = todo_service.get_todos().todo.findIndex((obj) => obj.id === 1);
        // then pointing length to the last list we added.
        expect(todo_service.get_todos().todo[index].title).toEqual("first");
    });

});