//import TodoApp from './Todo'
//Context
// CompA=> CompB=> CompC
// Theme: Dark/Light
//import Content from './Content'
//import './App.css'
import { useStore, actions } from "./store";
import { setTodoInput } from "./store/actions";
import { useRef } from "react";


// 1. Create Context
// 2. Provider 
// 3. Consumer (Provider and Consumer đều là React Component nên đều sử dụng được JSX vào nó)




function App() {

  const [state, dispatch] = useStore();
 
  const { todos, todoInput}= state

  const ref= useRef();
  
  const handleAdd = () =>{
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
    ref.current.focus();
  }

  return (
  
    <div style={{padding: 20}}>
        <input 
        ref={ref}
        placeholder="Enter todoInput........"
        value={todoInput}
        onChange={e=> {
          dispatch(actions.setTodoInput(e.target.value));
        }}
        
        />
        <button onClick={handleAdd}>Add</button>
        
          {todos.map((todo, index)=>
            (<li key={index}>{todo}</li>)
          )}
        
        
    </div>
    
    

  )
}

export default App;