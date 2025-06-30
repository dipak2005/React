import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTodos = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
  };

  let updateTaskvalue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    let copy = setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTaskvalue}
      />
      <button onClick={addNewTodos}>Add Task</button>

      <br />
      <br />
      <br />
      <br />

      <h4>Todos</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
