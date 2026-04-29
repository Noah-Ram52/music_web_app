// #Components
import FavoritedUserSongs from "../FavoritedUserSongs/FavoritedUserSongs";

// #CSS
import "./UserProfile.css"

// #React-Router
import { Link } from "react-router-dom";

function UserProfile ({
        user,
        favorites = [],
        onOpenProfile,
        onLogout
    }) {
   const favs = Array.isArray(favorites) && favorites.length ? favorites : [];

    return (
        <div className="user-profile">
            <div className="user-profile__left-sidebar">
                <div className="user-profile__left-sidebar_space">{user?.name}</div>
                    <div>
                        <button 
                            type="button" 
                            className="user-profile__left-sidebar_space_info"
                            onClick={onOpenProfile}
                            >
                            Profile Information                  
                        </button>
                        </div>
                    <div onClick={onLogout}>
                        <Link to="/" className="user-profile__logout-home">
                            Log Out
                        </Link>
                    </div>
            </div>
            <div className="user-profile__main_user_profile">
                <FavoritedUserSongs favorites={favs} />
            </div>
        </div>
    );
}

export default UserProfile;