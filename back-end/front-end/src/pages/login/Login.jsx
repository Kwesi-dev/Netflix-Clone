import './login.scss'
import { useRef, useContext } from 'react'
import { userLogin } from '../../context/authContext/apiCalls'
import { AuthContext } from '../../context/authContext/authContext'
import { Link } from 'react-router-dom'
const Register = () => {
    const emailRef = useRef()
    const passRef = useRef()

    const { dispatch } = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault()
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        userLogin(user, dispatch)
    }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="email or phone number" ref={emailRef}/>
                    <input type="password" placeholder="password" ref={passRef}/>
                    <button className="loginButton" onClick={handleClick}>Sign In</button>
                    <span>New to Netflix? <Link to="/register" className="link"><b style={{cursor: 'pointer'}}>Sign up now.</b></Link></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Register
