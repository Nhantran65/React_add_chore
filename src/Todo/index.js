
import {  useReducer, useRef } from "react";

import reducer, {initState} from './reducer'
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";
// import Content from './Content'

//  2. Action
  //  4. Dispatch 
function App() {  
    const [state, dispatch] = useReducer(logger(reducer), initState)

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