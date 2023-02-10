import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import HooksApp from './HooksApp'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook.jsx'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import CallbackHook from './06-useCallback/CallbackHook'
import './08-useReducer/intro-reducer'
import TodoApp from './08-useReducer/TodoApp'
import './index.css'
import MainApp from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <TodoApp/>
   </React.StrictMode>
  </BrowserRouter>
)
