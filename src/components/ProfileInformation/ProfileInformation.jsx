import "./ProfileInformation.css";

// #Images
import CloseProfile from "../../assets/images/close.png"

function ProfileInformation ({ user, onClose }) {
    return (
        <div className="profile-information">
            <h2 className="profile-information__title">User Information</h2>
            <img 
                className="profile-information__close_button" 
                src={CloseProfile} 
                alt="close button" 
                onClick={onClose} 
            />
            <div>Username&#58; {user?.name}</div>
        </div>
    );
}

export default ProfileInformation;