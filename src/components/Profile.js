import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../api"

export const Profile = () => {
    const [userPostsList, setUserPostsList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        !localStorage.getItem('token')
        ? navigate(`/home`)
        : null

        const fetchAllPosts = async () => {
                const response = await fetch (`${BASE_URL}/users/me`, {
                    headers: {
                        'Content-Type': 'Application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const postsObj = await response.json()
                const userPostsArr =  postsObj.data.posts
                console.log(userPostsArr)
                setUserPostsList(userPostsArr)
                return userPostsArr
            }
        fetchAllPosts()
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
    }
    const handleMessages = (postTitle, postId) => {
        return (
            <aside>
                <h4>{postTitle}</h4>
            </aside>
        )
    }
    
    return (
        <div id="post-wrapper">
            {
            userPostsList.map((post) => {
                console.log(post)
                return (
                    <div className='post'>
                        <h2 key={post._id}>{post.title}</h2>
                        <span >{post.description}</span>
                        <span>{post.price}</span>
                        <span>{
                            post.willDeliver
                            ? <div>Delivery Available</div>
                            : <div>Unable to deliver</div>
                        }</span>
                        <span>
                            {post.messages
                            ? <button onClick={() => handleMessages(post.title, post._id)}>View Messages</button>
                            : <div>No Messages</div>
                            }
                        </span>
                        <span>{
                            post.active
                            ? <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                            : <div>Archived Post</div>
                        }</span>
                    </div>
                )
            })
        }
        </div>
    )
}