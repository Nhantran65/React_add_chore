//import TodoApp from './Todo'
//Context
// CompA=> CompB=> CompC
// Theme: Dark/Light
//import Content from './Content'
//import './App.css'

import { useEffect, useImperativeHandle, useRef } from "react";
import Video from "./Video";

// 1. Create Context
// 2. Provider 
// 3. Consumer (Provider and Consumer đều là React Component nên đều sử dụng được JSX vào nó)




function App() {

  const videoRef = useRef()

  const handlePlay=()=> {
    videoRef.current.play();
  }
  const handlePause=()=> {
    videoRef.current.pause();
  }
  return (
  
    <div >
       <Video ref={videoRef}/>
       <button onClick={handlePlay}>play</button>
       <button onClick={handlePause}>pause</button>

    </div>
    
    

  )
}

export default App;