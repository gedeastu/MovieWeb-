import axios from "axios"
export const getMovieList = async() =>{
    const movie = await axios.get("")
    return
}

export const searchMovie = async(value)=>{
    const search = await axios.get(value)
    return
}