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
        console.log("Adding New Todo List....");
        this.todo_data.todo.push(todo);
    }   

    delete_todo(title){
        console.log("Deleting the list matching the Title.");
        const CurrentItem = this.todo_data.todo.findIndex((index)=>index.title == title)
        this.todo_data.todo.splice(CurrentItem,1)
    }

    update_todo(title, todo){
        console.log("Updating the existing index...");
        const CurrentItem = this.todo_data.todo.findIndex((index)=>index.title === title)
        this.todo_data.todo.splice(CurrentItem,1,todo)
             
        var res= this.todo_data.todo.find(obj =>{
            return obj.title === "New Updated";
        });
        return res;
    
    }
}


module.exports= todoservice;
