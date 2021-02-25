import "./App.css";
import React, { useEffect, useState } from "react";

//importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //useEffect
  useEffect(() => {
    getLocalTodos();
  }, [todos]);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // console.log("hit")

      localStorage.setItem("todos", JSON.stringify(todos));
    //  let todoLocal= JSON.parse(localStorage.getItem("todos")) 
    //  setTodos(todoLocal);
     

    // console.log(.parse(localStorage.getItem("todos"))===todos);
    // console.log("todos",todos);
    // let ami=localStorage.getItem("todos");
    // console.log("local",typeof JSON.parse(ami));
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Jubair's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
