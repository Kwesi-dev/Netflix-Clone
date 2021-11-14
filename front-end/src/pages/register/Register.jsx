import './register.scss'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const emailRef = useRef()
    const history = useHistory()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e)=>{
        e.preventDefault()
        const newUser={
            email,
            username,
            password,
        }
        try{
            await axios.post('/auth/register', newUser)
            history.push('/login')
        }catch{} 
    }
    console.log(username, email, password)
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
                        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
