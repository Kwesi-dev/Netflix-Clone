import { PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import './user.css'
import { useState, useContext } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { updateUser } from '../../context/userContext/apiCalls'
import { UsersContext } from '../../context/userContext/usersContext'
import axios from 'axios'
const User = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const location = useLocation()
    const user = location.user
    const history = useHistory()


    const handleUpdate = async (e) => {
        e.preventDefault()
        const updatedUser = {
            username,
            email,
            password
        }
        try{
            await axios.put('/users/'+ user._id,  updatedUser, {
                headers:{
                    token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                })
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="user">
           <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <Link to="/newUser">
                <button className="userAddBtn">Create</button>
               </Link>
           </div>
           <div className="userContainer">
               <div className="userShow">
                   <div className="userShowTop">
                       <img src={user.profilePic} alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                        </div>
                   </div>
                   <div className="userShowBottom">
                       <span className="userShowTitle">Username</span>
                       <div className="userShowInfo">
                           <PermIdentity className="userShowIcon"/>
                           <span className="userShowInfoTitle">{user.username}</span>
                       </div>
                       <span className="userShowTitle">Email</span>
                       <div className="userShowInfo">
                           <PhoneAndroid className="userShowIcon"/>
                           <span className="userShowInfoTitle">{user.email}</span>
                       </div>
                       <span className="userShowTitle">IsAdmin</span>
                       <div className="userShowInfo">
                           <PermIdentity className="userShowIcon"/>
                           <span className="userShowInfoTitle">{(user.isAdmin).toString()}</span>
                       </div>
                   </div>
               </div>
               <div className="userUpdate">
                   <span className="userUpdateTitle">Edit</span>
                   <form className="userUpdateForm">
                       <div className="userUpdateLeft">
                           <div className="userUpdateItem">
                               <label>Username</label>
                               <input type="text" placeholder={user.username} className="userUpdateInput" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Email</label>
                               <input type="email" placeholder={user.email} className="userUpdateInput" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Password</label>
                               <input type="password" placeholder="password" className="userUpdateInput" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                           </div>
                       </div>
                       <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src={user.profilePic} alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}} name="profilePic" onChange={(e)=>setProfilePic(e.target.files[0])}/>
                            </div>
                            <button className="userUpdateRightBtn" onClick={handleUpdate}>Update</button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default User
