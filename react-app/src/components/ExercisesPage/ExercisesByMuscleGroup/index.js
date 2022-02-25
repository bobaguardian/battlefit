import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import Exercise from "../Exercise";
import AddExerciseFormModal from "../AddExerciseFormModal";
import { getAllExercises } from "../../../store/exercises";


const ExercisesByMuscleGroup = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { muscle } = useParams();
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const exercises = Object.values(exercisesbyId).filter(e => e.muscle_group.name === muscle);

    useEffect(() => {
        dispatch(getAllExercises(""));
    }, [dispatch, location.pathname])

    return (
        <div className="dash-main-container">
            <div className="heading-add-exercise-div">
                <h2>Exercises For {muscle}</h2>
                <div className="add-exercise-button-container">
                    <AddExerciseFormModal />
                </div>
            </div>
            <div className="exercises-container">
                {exercises.map(({id, user_id, username, name, muscle_group, description, image}, index) => (
                    <Exercise key={`exercise-${index}`}
                    id={id}
                    user_id={user_id}
                    name={name}
                    description={description}
                    image={image}
                    muscle_group={muscle_group}
                    username={username}
                    />
                ))}

            </div>

        </div>
    )


}

export default ExercisesByMuscleGroup;
