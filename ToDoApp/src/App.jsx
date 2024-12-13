import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";


const App = () => {
  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState("");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  // new ToDoCard componenet is created for each ToDo which has buttons associated with it.
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index; //return all indexes in new array which are not equal to valIndex
    });

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todoapp", JSON.stringify({ todos: currTodos }));
  }

useEffect( () =>{
  if(!localStorage || !localStorage.getItem('todoapp')){return}
    
   
let db = JSON.parse( localStorage.getItem('todoapp'))
setTodos(db.todos)
    
},[])

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        todos={todos}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};

export default App;
