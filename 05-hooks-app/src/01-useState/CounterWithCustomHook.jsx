import {useCounter} from '../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  
    
  return (
    <>
          <h1>counter with hook: {counter}</h1>
          <hr />

          <button className="btn btn-primary" onClick={()=>increment(2)}>
              +1
          </button> 

          <button className="btn btn-primary" onClick={()=>decrement(2)}>
              -1
          </button>

          <button className="btn btn-primary" onClick={()=>reset()}>
              reset
          </button>
    </>
  )
}

export default CounterWithCustomHook
