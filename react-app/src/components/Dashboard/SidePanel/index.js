import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from '../../auth/LogoutButton';
import { getUserExercises } from "../../../store/exercises";

const SidePanel = () => {
    const dispatch = useDispatch();
    const history =useHistory();
	const sessionUser = useSelector(state => state.session.user)

    const goToMyExercises = async (e) => {
        await dispatch(getUserExercises(sessionUser.id));
        history.push(`/users/${sessionUser.id}`);
    }

    return (
        <div className="side-panel-container">
            <h2>Side Panel</h2>
            <div className="user-info">
                <img className="user-image" src={sessionUser.image} alt={`${sessionUser.username}'s profile picture`}></img>
                <h3>{sessionUser.username}</h3>
            </div>
            <button onClick={goToMyExercises}>My Exercises</button>
            <LogoutButton />
        </div>
    )
}

export default SidePanel;
