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
// 3.cleanup function luôn được gọi trước khi callback được gọi



function Content() {
    const [avatar, setAvatar]= useState()
    
    useEffect(()=>{
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview= URL.createObjectURL(file);
       setAvatar(file)
    }
    return(
        <div>
           <input
                type='file'
                onChange={handlePreviewAvatar}
           />
           {
            avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
            )
           }
          
        </div>
    )
}

export default Content

