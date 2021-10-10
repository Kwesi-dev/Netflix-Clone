import { loginFailure, loginStart, loginSuccess } from "./authActions"
import { axiosInstance } from '../../config'

//login
export const userLogin = async(user, dispatch)=>{
    dispatch(loginStart)
    try{
        const res = await axiosInstance.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch{
        dispatch(loginFailure)
    }
}