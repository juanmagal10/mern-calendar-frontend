import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld'
import JM from './JM';
import CounterApp from './CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorld />  */}
        {/* <FirstApp title='hola soy vegeta'/> */}
        <CounterApp value={100}></CounterApp>
    </React.StrictMode>
)