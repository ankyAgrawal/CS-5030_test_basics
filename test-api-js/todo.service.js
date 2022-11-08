class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
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
      return res.status(200).json({
        data: todos,
        error: null,
      });
}

    update_todo(req, todo){
        // Your code here
        const { id, item, completed } = req.body;
        const todoUpdate = todos.todo.find((todo) => todo.id == id);
        todo.complete = true;
    }
}


module.exports= todoservice;
