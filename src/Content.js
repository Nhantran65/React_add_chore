import { useEffect, useState, useLayoutEffect , useRef} from 'react'





function Content() {
    const [count, setCount]= useState(0)

    let timeId = useRef();
    const handleStart = ()=> {
       timeId.current =setInterval(()=>{
        setCount(prevCount=> prevCount-1);
      },1000)
      console.log('start->', timeId.current)
      
    }
    const handleStop=()=>{
      clearInterval(timeId.current)
      console.log('stop->', timeId.current)
    }
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
      </div>)
}
  
  
export default Content;
