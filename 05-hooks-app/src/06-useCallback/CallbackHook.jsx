import { useState } from "react"


const CallbackHook = () => {
    const [counter, setCounter]=useState(10)
  return (
    <>
          <h1>counter:{counter}</h1>
    </>
  )
}

export default CallbackHook
