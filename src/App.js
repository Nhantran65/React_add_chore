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
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";
function App() {

 
  return (
      <GlobalStyles>
        <div style={{padding:'0 32px', marginTop: 40, marginLeft: 40, fontSize: 40}} >
          <Button />
          <Button primary/>
          <Button secondary/>
          <Button success/>
          <Button danger/>
          <Button warning/>
          <Button info/>
          <Button light/>
          <Button dark/>
          <Button link/>
        </div>
      </GlobalStyles>
    // Css module 
    // Styled Component
    
    

  )
}

export default App;