import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
  
  const [counter, setCounter] = useState(value)
  
  const handleAdd=()=> {
  setCounter(counter+1)
  }
  const handleSubstract=()=> {
  setCounter(counter-1)
  }
  const handleReset=()=> {
  setCounter(0)
  }

  return (
    <div>
          <h1>Counter App</h1>
          <h2 data-testid='initial-value'> {counter} </h2>
      <button onClick={handleAdd}>
              +1
      </button>
      <button onClick={handleSubstract}>
              -1
      </button>
      <button aria-label='btn-reset' onClick={handleReset}>
              reset
      </button>
      </div>


      
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


