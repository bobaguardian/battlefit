import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { getAllExercises } from "../../../store/exercises";
import Exercise from "../Exercise";
import AddExerciseFormModal from "../AddExerciseFormModal";


const ExercisesByMuscleGroup = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { muscle } = useParams();
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const exercises = Object.values(exercisesbyId)

    useEffect(() => {
        dispatch(getAllExercises(muscle));
    }, [dispatch, location.pathname, muscle])

    return (
        <div className="dash-main-container">
            <div className="heading-add-exercise-div">
                <h2>Exercises For {muscle}</h2>
                <div className="add-exercise-button-container">
                    <AddExerciseFormModal />
                </div>
            </div>
            <div className="exercises-container">
                {exercises.map(({id, user_id, name, muscle_group, description, image}, index) => (
                    <Exercise key={`exercise-${index}`}
                    id={id}
                    user_id={user_id}
                    name={name}
                    muscle_group={muscle_group}
                    description={description}
                    image={image}
                    />
                ))}

            </div>

        </div>
    )


}

export default ExercisesByMuscleGroup;
