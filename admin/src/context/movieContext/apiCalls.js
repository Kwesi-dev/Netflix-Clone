import { getMovieFailure, getMovieStart, getMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieFailure, updateMovieSuccess } from './movieAction'

import axios from 'axios'

export const getMovies = async(dispatch)=>{
    dispatch(getMovieStart())
    try{
        const res = await axios.get('/movies', {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(getMovieSuccess(res.data))
    }catch(err){
        dispatch(getMovieFailure())
    }
}

//delete
export const deleteMovies = async (id, dispatch)=>{
    dispatch(deleteMovieStart())
    try{
        await axios.delete('/movies/'+id, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(deleteMovieSuccess(id))
    }catch(err){
        dispatch(deleteMovieFailure())
    }
}

//create
export const createMovie = async (movie, dispatch)=>{
    dispatch(createMovieStart())
    try{
        const res = await axios.post('/movies', movie, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(createMovieSuccess(res.data))
    }catch(err){
        dispatch(createMovieFailure())
    }
}

//update
export const updateMovie = async (movie, dispatch)=>{
    dispatch(updateMovieStart())
    try{
        const res = await axios.post('/movies',movie, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(updateMovieSuccess(res.data))
    }catch(err){
        dispatch(updateMovieFailure())
    }
}