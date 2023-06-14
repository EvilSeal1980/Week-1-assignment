/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && this.todos.length > index) {
      this.todos.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && this.todos.length > index) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && this.todos.length > index) {
      return this.todos[index];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

let todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Do laundry");
todoList.add("Clean the house");
console.log(todoList.getAll());
todoList.update(0, "Buy fruits"); 
console.log(todoList.get(0)); 
todoList.remove(1);
console.log(todoList.getAll()); 
todoList.clear();
console.log(todoList.getAll());  
module.exports = Todo;

