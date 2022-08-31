import { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

export const Posts = () => {
    const [postsList, setPostsList] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await fetch (`${BASE_URL}/posts`)
                const result = await response.json()

                console.log(result)
            } catch(err) {
                console.error('Error fetching post data: ', err)
            }
        }
    }, [])

    return (
        <h1></h1>
    )
    
}

