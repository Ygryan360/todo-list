import Todo from "./components/Todo";
import { useState } from "react";
import Form from "./components/Form";
function App() {
  const [todos, setTodos] = useState([]);
  const newTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let addedTodo = {
      id: Date.now(),
      label: formData.get("new"),
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, addedTodo]);
    e.target.reset();
  };
  const onTaskChange = (e, todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, done: e.target.checked } : t
    );
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="bg-slate-800 rounded-lg pt-10 px-4">
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          To Do List
        </h1>
        <Form onSubmit={newTodo} />
        <div className="border-t-2 border-slate-500 py-4 rounded">
          <h3 className="text-gray-300 font-semibold text-2xl mb-4 text-center">
            Avalaible tasks: {todos.length}
          </h3>
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onTaskChange={(e) => onTaskChange(e, todo)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
