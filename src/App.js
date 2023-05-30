
import {  useReducer, useRef } from "react";
// import Content from './Content'
//  1. initial State

const initState = {
  job: '',
  jobs: []
}
//  2. Action
const SET_JOB = 'set-job'
const ADD_JOB = 'add-job'
const DELETE_JOB = 'delete-job'

const setJob = payload => {
  return {
    type:SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type:ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type:DELETE_JOB,
    payload
  }
}

//  4. Dispatch 

const reducer = (state, action) => {
  console.log('Action: ', action)
  console.log('Prev state: ', state)

  let newState

  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
      case DELETE_JOB:
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1)
        newState = {
          ...state,
          jobs: newJobs
        }
        break
      default:
        throw new Error('Invalid action')
  }

  console.log('New state: ', state)

  return newState;
}

function App() {  
    const [state, dispatch] = useReducer(reducer, initState)

    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus();
    }

  return (
    <div className="App" style={{padding: 32}}>
      <h3>Todo list</h3>
      <input 
        ref={inputRef}
        value={job}
        placeholder="Enter to do..."
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>        
        {jobs.map((job, index) => (
          <li key={index}>{job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;