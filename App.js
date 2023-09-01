import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: "aaaaaaa", completed: false },
    { text: "bbbbbb", completed: false },
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, { text: todoText, completed: false }];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    setIncompleteTodos(newTodos);
  };

  return (
    <div>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p>Todo List</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px #ccc dotted",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <li>{todo.text}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
