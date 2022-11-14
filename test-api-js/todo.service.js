class todoservice{
    todo_data = {
        "todo":[{
            "id": 1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id": 2,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id": 3,
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
        // Your code here
        this.get_todos().todo.push(todo);      
    }

    is_todo_Exists( todo, isUpdate )
    {
        for( let i=0 ; i < this.get_todos().todo.length ; i++ )
        {
            if( todo.id == this.get_todos().todo[i].id )
            {
                if( isUpdate )
                {
                    if( (todo.title == this.get_todos().todo[i].title) && (todo.description == this.get_todos().todo[i].description) && (todo.done == this.get_todos().todo[i].done) )
                        return true;
                    else 
                        return false;    
                }
                else
                    return true;
            }                  
        }
        return false;
    }
    
    update_todo(todo){
        // Your code here
        for( let i=0 ; i < this.get_todos().todo.length ; i++ )
        {
            if( todo.id == this.get_todos().todo[i].id )
            {
                this.get_todos().todo[i].title = todo.title;
                this.get_todos().todo[i].description = todo.description;
                this.get_todos().todo[i].done = todo.done;
            }
        }   
    }
    delete_todo(id){
        // Your code here 
        for( let i=0 ; i < this.get_todos().todo.length ; i++ )
        {
            if( id == this.get_todos().todo[i].id )        
                this.get_todos().todo.splice(i);
        }     
    }

   
}


module.exports= todoservice;