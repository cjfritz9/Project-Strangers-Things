import { useState } from "react"
import { BASE_URL } from "../api"

export const NewPost = async () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [willDeliver, setWillDeliver] = useState(null)


    const createNewPost = async () => { 
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ post: {
                title: `${title}`,
                description: `${description}`,
                price: `${price}`,
                location: `${location}`,
                willDeliver: `${willDeliver}`
            }
            })  
        })
        const result = await response.json()
        console.log(result)
    }

    return (
        <div>
            <form id='new-post-form'>
                <div>
                    <h2>Create New Post</h2>
                </div>
                <div>
                    <input></input>
                    <textarea></textarea>
                    <input></input>
                </div>
            </form>
        </div>
    )
}