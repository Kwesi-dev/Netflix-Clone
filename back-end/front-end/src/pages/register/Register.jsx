import './register.scss'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config'
import { useHistory } from 'react-router-dom'
const Register = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passRef = useRef()
    const history = useHistory()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
        setUsername(emailRef.current.value)
    }

    const handleFinish = async (e)=>{
        e.preventDefault()
        setPassword(passRef.current.value)
        const newUser={
            username,
            email,
            password,
        }
        try{
            const res = await axiosInstance.post('/auth/register', newUser)
            setUser(res.data)
            history.push('/login')
        }catch{}
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to="/login">
                        <button className="loginButton">Sign In</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership or
                    <Link to="/login" className="link"><b> Sign In</b></Link>
                </p>
                { !email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passRef}/>
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
