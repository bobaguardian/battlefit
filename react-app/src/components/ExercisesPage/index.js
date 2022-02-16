import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllExercises } from "../../store/exercises";
import AddExerciseFormModal from "./AddExerciseFormModal";

const ExercisesPage = () => {
    const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const allExercises = Object.values(exercisesbyId);
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
           {allExercises.map(({name, muscle_group, description, image}, index) => (
               <div key={`exercise-${index}`}>
                   <h3>{name}</h3>
                   <p>{muscle_group.name}</p>
                   <p>{description}</p>
                   {image ? <img src={image}></img> : null}
                </div>
           ))}

        </div>
    )
}

export default ExercisesPage;
