import { useSelector } from "react-redux";
import LogoutButton from '../../auth/LogoutButton';

const SidePanel = () => {
	const sessionUser = useSelector(state => state.session.user)


    return (
        <div className="side-panel-container">
            <h2>Side Panel</h2>
            <div className="user-info">
                <img className="user-image" src={sessionUser.image} alt={`${sessionUser.username}'s profile picture`}></img>
                <h3>{sessionUser.username}</h3>
            </div>
            <LogoutButton />
        </div>
    )
}

export default SidePanel;
