import { useEffect, useState, useLayoutEffect , useRef} from 'react'





function Content() {
    const [count, setCount]= useState(60)

    let  timeId = useRef();
    const prevCount = useRef();
    const h1Ref= useRef();

    useEffect(() =>
    {
      prevCount.current=count;
    }, [count])

    useEffect(()=>{
      const rect = h1Ref.current.getBoundingClientRect();
      console.log(rect)
    })
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
    console.log(count, prevCount)
    return(
      <div>
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
      </div>)
}
  
  
export default Content;
