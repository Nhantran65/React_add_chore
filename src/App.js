//import TodoApp from './Todo'
//Context
// CompA=> CompB=> CompC
// Theme: Dark/Light
import Content from './Content'
import './App.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// 1. Create Context
// 2. Provider 
// 3. Consumer (Provider and Consumer đều là React Component nên đều sử dụng được JSX vào nó)




function App() {

  const context = useContext(ThemeContext);
  return (
  
    <div style={{padding: 20}}>
      <button onClick={context.toggleTheme} >
        Toggle Theme
      </button>   
      <Content  />;
    </div>
    
    

  )
}

export default App;