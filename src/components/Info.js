import { useEffect, useState } from "react"

export function Info({ list }) {
    const [posts, setPosts] = useState(null);

    async function getData() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div>
                {posts && posts.map((post, index) => (
                    <li style={{listStyleType: "none"}} key={index}>
                        <p>{post.title}</p> 
                        <p>{post.body}</p>
                    </li>
                ))}
            </div>
            {/* <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name} {item.lastname}</li>
                ))}
            </ul> */}
        </div>
    )
}