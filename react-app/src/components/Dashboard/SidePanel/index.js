import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from '../../auth/LogoutButton';
import { getUserExercises } from "../../../store/exercises";
import EditUserImageModal from "./EditUserImageModal";

const SidePanel = () => {
    const dispatch = useDispatch();
    const history =useHistory();
	const sessionUser = useSelector(state => state.session.user)
    const imageUrl = sessionUser.image
    const goToMyExercises = async (e) => {
        await dispatch(getUserExercises(sessionUser.id));
        history.push(`/users/${sessionUser.id}`);
    }

    return (
        <div className="side-panel-container">
            <div className="user-info">
                <div className="user-image-edit-div">
                    <img className="user-image" src={imageUrl} alt={`${sessionUser.username}'s profile picture`}></img>
                    <EditUserImageModal user={sessionUser} />

                </div>

                <h3>{sessionUser.username}</h3>
            </div>
            <button id="my-exercises-btn" onClick={goToMyExercises}>My Exercises</button>
            <LogoutButton />
        </div>
    )
}

export default SidePanel;
