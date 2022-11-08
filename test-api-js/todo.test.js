

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

    

    function del(b){
  console.log("Button", b)
  b.parentElement.remove()
}

<ul>
  <li>1 <button onclick="delete(this)">Delete</button></li>
  <li>2 <button onclick="delete(this)">Delete</button></li>
<ul>

 function add(c){
  console.log("Add", c)
  c.parentElement.add()
}

<ul>
  <li>1 <button onclick="add(this)">Add</button></li>
  <li>2 <button onclick="add(this)">Add</button></li>
<ul>

function update(a){
  console.log("Update", a)
  a.parentElement.update()
}

<ul>
  <li>1 <button onclick="update(this)">Update</button></li>
  <li>2 <button onclick="update(this)">Update</button></li>
<ul>


});
