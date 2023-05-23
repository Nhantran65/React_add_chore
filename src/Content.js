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

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']


function Content(){
    const [item, setItem] = useState('');
    const[posts, setPosts] = useState([]);
    const[type, setType] = useState('posts');
    const[showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [type]);

    useEffect(()=>{
        const handleScroll = () =>{
            setShowGoToTop(window.scrollY>=200)
            // kiểu so sánh luôn trả về kiểu dữ liệu Boolean value.(not need to use if else synstax)
        }
        window.addEventListener('scroll', handleScroll);

        // cleanup function 
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])


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
            {showGoToTop && (
                <button
                style={{position: 'fixed',
                right:  20,
                bottom: 20
            }}
                >
                    Up 
                </button>
            )}   
        </div>
    )
}

export default Content

