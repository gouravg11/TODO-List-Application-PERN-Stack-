import React, { Fragment } from "react";
import './App.css';


// components

import InputTodo from "./Component/InputTodo";
import ListTodos from "./Component/ListTodos";

function App() {
  return <Fragment><div className = "container"><InputTodo /><ListTodos /></div></Fragment>;
}

export default App;
