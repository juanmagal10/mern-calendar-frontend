import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/slices/apis"


export const TodoApp = () => {
  const [todoId, setTodoId]=useState(1)
  // const {data:todos=[], isLoading} = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId+1)
  }
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId-1)
  }
  
  return (
    <>
          <h1>todos-rtk query</h1>
          <hr />
      <h4>is loading...{isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>
      {/* <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
            <strong>{todo.completed ? 'Done ' : 'Pending '}</strong>
            {todo.title}
          </li>
        })}
      </ul> */}

    </>
  )
}


