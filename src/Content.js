import { useEffect, useState, useLayoutEffect } from 'react'

// 1.useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback,[])
//  - Chỉ gọi lại callback đúng một lần khi component mounted
// 3.useEffect(callback,[deps])
//  - Callbacks sẽ được gọi lại mỗi khi Dependencies thay đổi
//===============================
// 1.callback luôn được gọi sau khi component mounted
// 2.cleanup function luôn được gọi trước khi component unmounted
// 3.cleanup function luôn được gọi trước khi callback được gọi

// useEffect 
// 1. Cập nhật lại state 
// 2. Cập nhật lại DOM
// 3. Render lại UI
// 4. Gọi Clean up để deps thay đổi
// 5. Gọi UseEffect  callback

// useLayoutEffect (sử dụng khi setState rồi dùng useEffect set lại chính nó để trở thành một component mới rồi mới render lại UI)
// 1. Cập nhật lại state 
// 2. Cập nhật lại DOM
// 3. Gọi Clean up để deps thay đổi
// 4. Gọi useLayoutEffect callback(sync)
// 5. Render lại UI


function Content() {
    const [count, setCount]= useState(0)
    useLayoutEffect(
      ()=>{
        if(count>3){
          setCount(0);
        }
      }
    ) 
    const handleRun = ()=>{
      setCount(count+1);
    }
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={handleRun}>
          Run 
        </button>
      </div>)
}
  
  
export default Content;
