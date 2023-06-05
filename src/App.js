//import TodoApp from './Todo'
//Context
// CompA=> CompB=> CompC
// Theme: Dark/Light
//import Content from './Content'
//import './App.css'

//import { useEffect, useImperativeHandle, useRef } from "react";
//import Video from "./Video";

// 1. Create Context
// 2. Provider 
// 3. Consumer (Provider and Consumer đều là React Component nên đều sử dụng được JSX vào nó)
//import Heading from "./components/Heading";
//import Paragraph from "./components/Paragraph";
import {Routes, Route, Link} from "react-router-dom";
import HomePage from './pages/Home';
import NewsPage from './pages/News'; 
import ContactPage from './pages/Contacts';

import GlobalStyles from "./components/GlobalStyles";
//import Button from "./components/Button";
function App() {

 
  return (
      <GlobalStyles>
        <div style={{ marginTop: 40, marginLeft: 40, fontSize: 40}} >
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/news'>Contacts</Link>
              </li>
              <li>
                <Link to='/contacts'>News</Link>
              </li>
            
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/contacts" element={<ContactPage/>}/>

          </Routes>
        </div>
      </GlobalStyles>
    // Css module 
    // Styled Component
    
    

  )
}

export default App;