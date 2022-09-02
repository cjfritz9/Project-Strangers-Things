import { useEffect, useState } from "react";
import { BASE_URL } from "../api";

export const Posts = () => {
    const [postsList, setPostsList] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])

    useEffect(() => {
        const getPosts = async() => {
            await fetchAllPosts()
        }
        getPosts()
    }, [])

    const fetchAllPosts = async () => {
        try {
            const response = await fetch (`${BASE_URL}/posts`)
            const postsObj = await response.json()
            const postsArr =  postsObj.data.posts
            setPostsList(postsArr)
        } catch(err) {
            console.error('Error fetching post data: ', err)
        }
    }
    return (
        <div>{
            postsList.map((post, i) => {
                return (
                    <div>
                        <h1 key={i}>{post.title}</h1>
                        <p key={i}>{post.description}</p>
                    </div>
                )
            })
            }
        </div>
    )
}