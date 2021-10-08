import { getListsStart, getListsFailure, getListsSuccess, deleteListFailure, deleteListSuccess, deleteListStart, createListStart, createListSuccess, createListFailure, updateListStart, updateListFailure, updateListSuccess } from './listAction' 

import axios from 'axios'

export const getLists = async(dispatch)=>{
    dispatch(getListsStart())
    try{
        const res = await axios.get('/lists', {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(getListsSuccess(res.data))
    }catch(err){
        dispatch(getListsFailure())
    }
}

//delete
export const deleteList = async (id, dispatch)=>{
    dispatch(deleteListStart())
    try{
        await axios.delete('/lists/'+id, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(deleteListSuccess(id))
    }catch(err){
        dispatch(deleteListFailure())
    }
}

//create
export const createList = async (list, dispatch)=>{
    dispatch(createListStart())
    try{
        const res = await axios.post('/lists', list, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(createListSuccess(res.data))
    }catch(err){
        dispatch(createListFailure())
    }
}

//update
export const updateList = async (id, list, dispatch)=>{
    dispatch(updateListStart())
    try{
        const res = await axios.put('/movies/'+id, list, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(updateListSuccess(res.data))
    }catch(err){
        dispatch(updateListFailure())
    }
}