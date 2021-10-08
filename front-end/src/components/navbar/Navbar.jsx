import { useContext, useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { logout } from '../../context/authContext/authActions'
import { AuthContext } from '../../context/authContext/authContext'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null) 
    }
    const { dispatch } = useContext(AuthContext)

    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                    <Link to="/" className="link"><span>Homepage</span></Link>                    
                    <Link to="/series" className="link"><span className="mainLink">Series</span></Link>
                    <Link to="/movies" className="link"><span className="mainLink">Movies</span></Link>                   
                    <span>New And Popular </span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>

                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Setings</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
