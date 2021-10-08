import { getUsersStart, getUsersSuccess, getUsersFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, createUserStart, createUserSuccess, createUserFailure, updateUserStart, updateUserSuccess, updateUserFailure } from './usersActions'
import axios from 'axios'

export const getUsers = async(dispatch)=>{
    dispatch(getUsersStart())
    try{
        const res = await axios.get('/users', {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(getUsersSuccess(res.data))
    }catch(err){
        dispatch(getUsersFailure())
    }
}

//delete
export const deleteUser = async (id, dispatch)=>{
    dispatch(deleteUserStart())
    try{
        await axios.delete('/users/'+id, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(deleteUserSuccess(id))
    }catch(err){
        dispatch(deleteUserFailure())
    }
}

//create
export const createUser = async (user, dispatch)=>{
    dispatch(createUserStart())
    try{
        const res = await axios.post('/auth/register', user, {
            headers:{
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(createUserSuccess(res.data))
    }catch(err){
        dispatch(createUserFailure())
    }
}

// //update user
// export const updateUser = async (id, user, dispatch)=>{
//     dispatch(updateUserStart())
//     try{
//         const res = await axios.put('/users/'+id, user, {
//             headers:{
//                 token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
//             }
//         })
//         dispatch(updateUserSuccess(id))
//     }catch(err){
//         dispatch(updateUserFailure())
//     }
// }