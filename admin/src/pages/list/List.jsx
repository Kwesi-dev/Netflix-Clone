import './list.css'
import { useState, useHistory } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
const List = () => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [type, setType] = useState("")

    const location = useLocation()
    const list = location.list
    console.log(list);
    
    const handleUpdate = async (e) => {
        e.preventDefault()
        const updatedlist = {
            title,
            genre,
            type,
        }
        try{
            await axios.put('/lists/'+ list._id,  updatedlist, {
                headers:{
                    token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                })
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="product">
           <div className="productTitleContainer">
               <h1 className="productTitle">List</h1>
               <Link to="/newList">
                <button className="productAddBtn">Create</button>
               </Link>
           </div>
           <div className="productTop">
               <div className="productTopRight">
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>                       
                    </div>
               </div>                
           </div>
           <div className="productBottom">
               <form className="productForm">
                   <div className="productFormLeft">
                       <label>List Title</label>
                       <input type="text" placeholder={list.title} name="title" onChange={(e)=>setTitle(e.target.value)}/>
                       <label>Genre</label>
                       <input type="text" placeholder={list.genre} name="genre" onChange={(e)=>setGenre(e.target.value)}/>
                       <label>Type</label>
                       <input type="text" placeholder={list.type} name="type" onChange={(e)=>setType(e.target.value)}/>
                       
                   </div>
                   <div className="productFormRight">
                       <button className="productUploadBtn" onClick={handleUpdate}>Update</button>
                   </div>
               </form>
           </div>
        </div>
    )
}

export default List
