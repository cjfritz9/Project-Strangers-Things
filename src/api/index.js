export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const fetchAllPosts = async () => {
    try {
        const response = await fetch (`${BASE_URL}/posts`)
        const result = await response.json()

        console.log(result)
        if (result.error) throw result.error
        // return result.data.posts
    } catch(err) {
        console.error('Error fetching post data: ', err)
    }
}

export const registerUser = async () => {

    const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ user: {
            username: `${username}`,
            password: `${password}`
        }
        })    
    })
    const result = await response.json()
    console.log(success)
    localStorage.setItem('token', result.data.token)
    console.log(localStorage)
    return
}




