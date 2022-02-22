import { useDispatch, useSelector } from "react-redux";

import { removeExercise } from "../../../store/exercises";
import EditExerciseFormModal from "../EditExerciseFormModal";
import AddLogFormModal from "../../LogsPage/AddLogFormModal";
import AddBattleLogFormModal from "../../BattlePage/AddBattleLogFormModal";

const Exercise = ({ id, user_id, name, muscle_group, description, image, monsterName, battleId }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
    const exercise = {id, user_id, name, muscle_group, description, image};

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeExercise(id));
        return;
    }

	return (
        <div className="exercise-box">
            <div className="exercise-img-text">
                {image ? <img className="exercise-image" src={image} alt="exercise-pic"></img> : null}
                <div className="exercise-detail-container">
                    <h3>{name}</h3>
                    {muscle_group ? <p>{muscle_group.name}</p> : null}
                    {description ? <p>{description}</p> : null}
                </div>

            </div>
            <div className="add-log-edit-delete-exercise">
                {monsterName && battleId ?
                    <AddBattleLogFormModal battleId={battleId} exercise_id={id} exerciseName={name} monsterName={monsterName}/>
                : <AddLogFormModal exercise_id={id} exerciseName={name}/>}
                { sessionUser.id === user_id ?
                    <>
                        <EditExerciseFormModal exercise={exercise} />
                        <button className="delete-exercise-btn" onClick={handleDelete}>
                            <i className="fa-solid fa-square-minus"></i>
                        </button>
                    </>
            : null}


            </div>
        </div>
	);
};

export default Exercise;
