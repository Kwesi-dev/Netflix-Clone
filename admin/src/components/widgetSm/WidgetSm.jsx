import { Visibility } from '@material-ui/icons'
import './widgetSm.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
const WidgetSm = () => {
    const [newUsers , setNewUsers] = useState([])

    const getNewUsers = async()=>{
        try{
            const res = await axios.get('/users?new', {
                headers:{
                    token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                }
            })
            setNewUsers(res.data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getNewUsers()
    }, [])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((newUser)=>
                    <li className="widgetSmListItem" key={newUser._id}>
                        <img src={newUser.profilePic} alt="" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{newUser.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility  className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default WidgetSm