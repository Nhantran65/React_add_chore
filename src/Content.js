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
    const [lessonId, setLessonId] = useState(1);

    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    }, [lessonId])
   

  const lessons = [
    {
      id: 1,
      name: 'ReactJS là gì? Tại sao nên học ReactJS',
    },
    {
      id: 2,
      name: 'SPA/MPA là gì ?',
    },
    {
      id: 3,
      name: 'Arrow function',
    },
  ];

  return (
    <div>
      <ul>
        {lessons.map(lesson => 
                (
                    <li
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? 'red' : '#333',
                        cursor: 'pointer'
                    }}  
                    onClick={() => setLessonId(lesson.id)}
                >                    
                {lesson.name}
                </li>
                )
            )
        }

        
      </ul>
    </div>
  );
}

export default Content;
