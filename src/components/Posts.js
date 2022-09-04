import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import {
    Routes,
    Route,
    Link,
 } from 'react-router-dom'

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
        <div>
            {
            postsList.map((post) => {
                return (
                    <div>
                        <h2 >{post.title}</h2>
                        <span >{post.description}</span>
                        {/* {console.log(post)} */}
                    </div>
                )
            })

            }
        </div>
    )
}