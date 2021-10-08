import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
const Home = () => {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(()=>
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",

    ],[])
    
    useEffect(()=>{
        const getUserStats = async()=>{
            try{
                const res = await axios.get("users/stats/", {
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmVjYTE0ZWI0ZmJmMjlmYzY3OTBlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDc1NzcyNiwiZXhwIjoxNjMxMTg5NzI2fQ.E0zhXMWPRy1F8PnL_abTMauSEkWTE5qqlbrY_0eMH2o"
                    }
                })
                const statsList = res.data.sort(function(a,b){
                    return a._id - b._id;
                })
                statsList.map((item) => setUserStats((prev) => [ ...prev, { name: MONTHS[item._id - 1], "New User": item.total }]))
            }catch(err){
                console.log(err)
            }
        }
        getUserStats()
    },[MONTHS])
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>            
        </div>
    )
}

export default Home
