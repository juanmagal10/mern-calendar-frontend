import { useForm } from "../hooks/useForm"

const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onReset} = useForm({
        description:''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length<=1)return

        const newTodo = {
            done: false,
            id: new Date().getTime(),
            description
        }

        onNewTodo(newTodo)
    }
    
   
    
  return (
      <form onSubmit={onFormSubmit}>
          <input
              type="text"
              placeholder="'que hay que hacer?"
              className="form-control"
              name="description"
              value={description}
              onChange={onInputChange}
          />
            <button type="submit"
              className="btn btn-outline-primary mt-1"
          >
              Agregar
            </button>
          </form>
  )
}

export default TodoAdd
