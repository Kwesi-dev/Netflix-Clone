import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../config'
import { Link } from 'react-router-dom'

const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})

    const getMovie = async()=>{
        try{
            const res = await axiosInstance.get(`movies/find/${item}`, {
                headers:{
                    token : "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
                  }
            })
            setMovie(res.data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getMovie();
    },[item])

    return (
        <Link to={{ pathname : "/watch", movie: movie }}>
        <div className="listItem"
            style={{left: isHovered && index * 225 -50 + index * 2.5 }}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={movie.img} alt="" />
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop/>
                    <div className="info">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
        </Link>      
    )
}

export default ListItem 