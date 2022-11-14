

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    todoItem = {
        "id": 4,
        "title": "Adding T4",
        "description": "Adding an item",
        "done": false
    };

    updatedTODOItem = {
        "id": 4,
        "title": "Updating T4",
        "description": "Updated the added item",
        "done": true
    };
    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        console.log("Inside the get_todos");
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });    
    
    test("adding a todo item", () => {
    // item count is 4 after adding 
        todo_service.add_todo(todoItem);
        expect(todo_service.is_todo_Exists(todoItem, false));
    });
    
    test("updating the added todo item", () => {
        
        todo_service.update_todo( updatedTODOItem);
        expect(todo_service.is_todo_Exists(updatedTODOItem, true));
});

    test("deleting the updated todo item", () => {
        
        todo_service.delete_todo( updatedTODOItem.id  );
        expect(todo_service.is_todo_Exists(updatedTODOItem, false));
    }); 


    // Write all your test cases here that corresponds to software requirements


});