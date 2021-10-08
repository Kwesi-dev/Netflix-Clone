import { useState, useContext } from 'react'
import { login } from '../../context/authContext/apiCalls'
import { AuthContext } from '../../context/authContext/AuthContext'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        login({email, password}, dispatch)
    }
    return (
        <div className="login">
            <form className="form">
                <input type="email" placeholder="email" className="input" onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" className="input" onChange={e=>setPassword(e.target.value)}/>
                <button className="loginBtn" onClick={handleSubmit} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

export default Login
