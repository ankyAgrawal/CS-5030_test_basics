class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        const { id, item, completed } = req.body;
    const newTodo = {
      id,
      item,
      completed,
    };
    todos.push(newTodo);
    return this.todos;
    }

    delete_todo(req){
        console.log("in delete")
      this.todo_data.todo.splice(1, 1)
      return this.todos
      
}

    update_todo(){
        const todoUpdate = this.todos.todo.find((map) => map.title == "T2");
        todoUpdate.description = "update description";
        return this.todos.todo;
    }
}


module.exports= todoservice;
