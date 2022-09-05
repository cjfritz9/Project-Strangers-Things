import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { useNavigate } from 'react-router-dom'

export const Posts = () => {
    const [postsList, setPostsList] = useState([])
    const [msgContent, setMsgContent] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // localStorage.getItem('token')
        // ? navigate(`/home`)
        // : navigate(`/`)

        const fetchAllPosts = async () => {
            try {
                const response = await fetch (`${BASE_URL}/posts`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                const postsObj = await response.json()
                const postsArr =  postsObj.data.posts
                setPostsList(postsArr)
            } catch(err) {
                console.error('Error fetching post data: ', err)
            }
        }
        fetchAllPosts([...postsList])
    }, [])

    const handleDelete = (postId) => {
        console.log(postId)
        fetch(`${BASE_URL}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        navigate('/')     
    }

    const handleSendMessage = (postId, msgContent) => {
        fetch(`${BASE_URL}/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                message: {
                    content: msgContent
                }
            })
        })
    }

    // yeah... didn't end up fixing this. can get it to fill every input and then send a message to the right person, but that's about it

    return (
        <div id='post-wrapper'>
            {
            postsList.map((post) => {
                // console.log(post)
                return (
                    <div key={post._id} className='post'>
                        <h2 >{post.title}</h2>
                        <span className="post-description">{post.description}</span>
                        <span className="post-price">{post.price}</span>
                        <span className="post-delivery">{
                            post.willDeliver
                            ? <div>Delivery Available</div>
                            : <div>Unable to deliver</div>
                        }</span>
                        <span>{
                            post.isAuthor
                            ? <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                            : null
                        }</span>   
                        <span>{
                            localStorage.getItem('token')
                            ? 
                            <form onSubmit={() => handleSendMessage(post._id)}>
                                <button>Send Message</button>
                            </form>
                            : null
        }               </span>
                    </div>
                )
            })
            }
        </div>
    )
}