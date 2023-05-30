
import { useState, useRef, useMemo, useReducer } from "react";

// useState
// 1. init state: 0
// 2. Actions : Up(state + 1) Down (state - 1)

// usereducer
// 1. init state: 0
// 2. Actions : Up(state + 1) Down (state - 1)
// 3. Reducer
// 4. dispatch( a term which is used to activate an action)

// init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer 
const reducer=(state, action)=> {
  switch(action){
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error(`Invalid action`)
  }
}


function App() {
  const [count, dispatch]=useReducer(reducer, initState)

  return (
    <div style={{ padding: 40 }}>
      <h1>{count}</h1>
      <button
      onClick={()=>{dispatch(DOWN_ACTION)}}
      >Down</button>
      <button
      onClick={()=>{dispatch(UP_ACTION)}}
      >Up</button>

    </div>
  );
}

export default App;