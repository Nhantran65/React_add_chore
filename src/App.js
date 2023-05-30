//import TodoApp from './Todo'
//Context
// CompA=> CompB=> CompC
// Theme: Dark/Light
import Content from './Content'
import { useState, createContext } from 'react';
import './App.css'

// 1. Create Context
// 2. Provider 
// 3. Consumer (Provider and Consumer đều là React Component nên đều sử dụng được JSX vào nó)

export const ThemeContext = createContext();
console.log(ThemeContext)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = ()=> {
    setTheme(theme=== 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={theme}>
    <div style={{padding: 20}}>
      <button
      onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <Content  />;
    </div>
    </ThemeContext.Provider>
    // tất cả children của Provider đều nhận được dữ liệu từ theme qua Props của Provider
  )
}

export default App;