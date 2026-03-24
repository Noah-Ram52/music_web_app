// #CSS
import "./UserProfile.css"

// #React-Router
import { Link } from "react-router-dom";

function UserProfile ({
        user,
        onLogout
    }) {
    return (
        <div className="user-profile">
            <div className="user-profile__left-sidebar">
                <div className="user-profile__left-sidebar_space">{user?.name}</div>
                    <div 
                    onClick={onLogout}>
                     <Link to="/" className="user-profile__logout-home">
                      Log Out
                     </Link>
               </div>
            </div>
        </div>
    );
}

export default UserProfile;