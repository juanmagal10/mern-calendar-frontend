import React, { useEffect } from 'react';
import {useForm} from '../hooks/useForm'
import Message from './Message';

const SimpleForm = () => {
    const {formState, onInputChange,username, email, password, onReset } = useForm({
                    username: '',
                    email: '',
                    password: '',
    })
    
    // const { username, email, password } = formState;


  return (
    <>
          <h3>custom hook form</h3>
          <hr />
          <input
              type="text"
              className='form-control'
              placeholder='username'
              name='username'
              value={username}
              onChange={onInputChange}
          />

          <input
              type="email"
              className='form-control mt-2'
              placeholder='juan@google.com'
              name='email'
              value={email}
              onChange={onInputChange}
          />

          <input
              type="password"
              className='form-control mt-2'
              placeholder='password'
              name='password'
              value={password}
              onChange={onInputChange}
          />

          {
              (username==='crafter2')&&<Message/>
          }

          <button onClick={onReset} className='btn btn-primary mt-2'>Reset</button>
    </>
  )
}

export default SimpleForm
