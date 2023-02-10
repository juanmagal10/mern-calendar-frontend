import TodoItem from "./TodoItem"

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
        <ul className="list-group">
            {
              todos.map((todo,index)=>{
                return (<TodoItem
                  key={todos[index].id}
                  todo={todos[index]}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                />)
              })
            }
        
          </ul>
  )
}

export default TodoList
