import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Exercise from "../Exercise";
import { getAllExercises } from "../../../store/exercises";


const ExercisesByMuscleGroup = () => {
    const dispatch = useDispatch();
    const { muscle } = useParams();
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const exercises = Object.values(exercisesbyId)

    useEffect(() => {
        dispatch(getAllExercises(muscle));
    }, [dispatch])

    return (
        <div>
            <h2>Exercises By Muscle Group</h2>
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
    )


}

export default ExercisesByMuscleGroup;
