class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "Task1",
            "description": "buy milk",
            "done": false
        },{
            "id":2,
            "title": "Task2",
            "description": "turn off bed room lights",
            "done": false
        },{
            "id":3,
            "title": "Task3",
            "description": "polish the shoe",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    //GET
    get_todos(){
        return this.todos;
    }

    // Your code here

    //POST
    add_todo(request){
        app.post('/', (request, response) => {
            var newTodo = request.get_todos;
            newTodo.id = todos.length +1;
            todos.push(newTodo);
            response.status(201).json(newTodo);
          });
    }

    //DELETE
    delete_todo(id){
        // Your code here
    }

    //UPDATE
    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;