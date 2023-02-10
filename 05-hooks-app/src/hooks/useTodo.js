import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
    const initialState = [

    ]
    const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (todo) => {
        const action = {
        type: '[TODO] Add Todo',
        payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
        type: '[TODO] Remove TODO',
        payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
        })
    }

    return {
        handleDeleteTodo, 
        handleNewTodo,
        handleToggleTodo,
        todos
    }

}