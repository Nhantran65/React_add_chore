import { useEffect, useState } from 'react'

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



function Content(){
    const [width, setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return()=>{
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    return(
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content

