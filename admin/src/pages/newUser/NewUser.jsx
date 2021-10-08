import { Publish } from '@material-ui/icons'
import { useContext, useState } from 'react'
import { createUser } from '../../context/userContext/apiCalls'
import { UsersContext } from '../../context/userContext/usersContext'
import { useHistory } from 'react-router-dom'
import './newUser.css'

const NewUser = () => {
    const [user, setUser] = useState(null)
    const [img, setImg] = useState("")
    const history = useHistory()

    const { dispatch } = useContext(UsersContext)

    const handleChange = (e)=>{
        let value = e.target.value
        setUser({ ...user, [e.target.name]: value })
    }

    const handleFile = (e)=>{
        let img = e.target.files[0]
        setUser({ ...user, [e.target.name]: img })
    }
    const handleRegister = (e)=>{
        e.preventDefault()
        createUser(user, dispatch)
        history.push('/users')
    }
    console.log(user)
    
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder="john" name="username" onChange={handleChange}/>
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange}/>
                    </div>
                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                    </div>
                    <div className="newUserItem">
                        <label>isAdmin</label>
                        <select name="isAdmin" style={{height: "40px"}} onChange={handleChange}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div className="itemRightButtons">
                        <input type="file" id="file" name="profilePic" onChange={handleFile}/>
                        <button className="newUserBtn" onClick={handleRegister}>Register</button>
                    </div>                  
            </form>
        </div>
    )
}

export default NewUser
