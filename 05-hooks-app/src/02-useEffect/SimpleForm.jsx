import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'crafter',
        email: 'juan@gmail.com'
    });

    const { username, email } = formState;

    const  onInputChange  = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
        // console.log('use effect called')
    }, []);

    useEffect(() => {
        // console.log('form state changed')
    }, [formState]);

    useEffect(() => {
        // console.log('email changed')
    }, [email]);

  return (
    <>
          <h3>simple form</h3>
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

          {
              (username==='crafter2')&&<Message/>
          }
    </>
  )
}

export default SimpleForm
