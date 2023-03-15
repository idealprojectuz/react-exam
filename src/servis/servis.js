import axios from "axios"
export const getdata =  async() => { 
    const fetching = await axios.get(process.env.REACT_APP_BASE_URL, {
        headers: {
        'Authorization': process.env.REACT_APP_TOKEN,
        },

    })
    return fetching.data

}
