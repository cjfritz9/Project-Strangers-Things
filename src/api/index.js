export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2208-ftb-et-web-ft'

export const fetchAllPosts = async () => {
    try {
        const response = await fetch (`${BASE_URL}/posts`)
        const result = await response.json()

        console.log(fetchAllPosts())
        if (result.error) throw result.error
        // return result.data.posts
    } catch(err) {
        console.error('Error fetching post data: ', err)
    }
}

export const handleRegister = async () => {


}

