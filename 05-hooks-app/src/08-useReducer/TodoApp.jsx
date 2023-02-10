import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";



const TodoApp = () => {
  //useTodo

  const{handleDeleteTodo,handleNewTodo,handleToggleTodo, todos}=useTodo()


  return (
    <>
      <h1>todo app {todos.length}, <small>pendientes:{todos.filter(todo=>todo.done!==true).length}</small></h1>
      <hr />
      
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>add todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}

export default TodoApp
