import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import './topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <span className="logo">
                        KwesiAdmin
                    </span>
                </div>
                <div className="right">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
