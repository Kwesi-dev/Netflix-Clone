import { loginFailure, loginStart, loginSuccess } from "./authActions"
import axios from 'axios'

//login
export const userLogin = async(user, dispatch)=>{
    dispatch(loginStart)
    try{
        const res = await axios.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch{
        dispatch(loginFailure)
    }
}