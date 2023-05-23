import { useEffect, useState } from 'react'

// 1.useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback,[])
//  - Chỉ gọi lại callback đúng một lần khi component mounted
// 3.useEffect(callback,[deps])
//  - Callbacks sẽ được gọi lại mỗi khi Dependencies thay đổi
//===============================
// 1.callback luôn được gọi sau khi component mount

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']


function Content(){
    const [item, setItem] = useState('');
    const[posts, setPosts] = useState([]);
    const[type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [type]);


    return(
        <div>
            
            {
                tabs.map(tab => (
                    <button
                        key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'

                        } : {}                       
                    }
                    onClick={() => setType(tab)}   
                    >
                        {tab}
                    </button>
                ))
            }
            <input
                value = {item}
                onChange = {e => setItem(e.target.value)}
            />
            <ul>
                {
                    posts.map(item => (
                        <li key={item.id}>{item.title || item.name}</li>
                    ))
                }

            </ul>      
        </div>
    )
}

export default Content

