import React, { useReducer, useState } from 'react'
import './usereducer.css'

const initialState = 0;
//reducer accepts to parameter, one is current state and other one is action method and reducer need to return something
const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === "INCREMENT") {
    return state + 1
  } else {
    return state - 1;
  }
}

const UseReducer = () => {
  // const [count, setCount] = useState(0)

  //useReducer same like useState but it takes to argument that is reducer funtion and initial state
  //we call dispatch when we have to change the state like setState in useState and dispatch is for triggering the action method
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrment</button>
    </div>
  )
}

export default UseReducer
