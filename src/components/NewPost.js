import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../api"

export const NewPost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const submitHandler = async (event) => {
        event.preventDefault()

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
        const newPost = {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            location: `${location}`,
            willDeliver: `${willDeliver}`
        }
        await createNewPost(newPost)
        console.log(newPost)
        navigate('/profile')

    }

    const handleDelivery = () => {
        setWillDeliver(!willDeliver)
    }

    return (
        <div id='new-post-wrapper'>
            <form type='submit' id='new-post-form' onSubmit={submitHandler}>
                    <h2 id='new-post-header' className='new-post-inputs'>Create New Post</h2>
                    <input id='new-post-title' className='new-post-inputs' placeholder='Item or Service' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <div>
                        <input id='new-post-price' className='new-post-inputs-2' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                        <input id='new-post-location' className='new-post-inputs-2' placeholder='Location (Optional)' value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <textarea id='new-post-description' className='new-post-inputs' placeholder='Describe your item or service' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <div id='new-post-bottom-inputs'>
                        <label id='delivery-option' htmlFor='delivery-checkbox'>
                            Willing to Deliver?
                            <input id='delivery-checkbox' type='checkbox' value={willDeliver} onChange={handleDelivery}/>
                        </label>
                        <button>Submit Post</button>
                    </div>
            </form>
        </div>
    )
}