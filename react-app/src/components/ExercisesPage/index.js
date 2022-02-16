import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllExercises, removeExercise } from "../../store/exercises";
import AddExerciseFormModal from "./AddExerciseFormModal";
import Exercise from "./Exercise";

const ExercisesPage = () => {
    const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const allExercises = Object.values(exercisesbyId).sort((a, b) => {
        if (a.muscle_group.name < b.muscle_group.name) return -1;
        else if (a.muscle_group.name > b.muscle_group.name) return 1;
        else return 0;
    });
    const muscleGroups = allExercises.map(exercise => exercise.muscle_group)

    useEffect(() => {
        dispatch(getAllExercises());
    }, [dispatch])

    return (
        <div className="exercises-container">
            <h2>Exercises</h2>
            {/* {muscleGroups.map(({name, image}, index) => {
                <div>
                    <h3>{name}</h3>
                </div>
            })} */}

            <div className="add-exercise-button-container">
                <AddExerciseFormModal />
            </div>
            {allExercises.map(({id, user_id, name, muscle_group, description, image}, index) => (
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

export default ExercisesPage;
