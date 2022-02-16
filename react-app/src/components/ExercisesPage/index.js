import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getAllExercises, removeExercise } from "../../store/exercises";
import { getAllMuscles } from "../../store/muscles";
import AddExerciseFormModal from "./AddExerciseFormModal";
// import Exercise from "./Exercise";
import MuscleGroups from "./MuscleGroups";

const ExercisesPage = () => {
    const dispatch = useDispatch();
    // const exercisesbyId = useSelector(state => state.exercises.byId);
    // const allExercises = Object.values(exercisesbyId).sort((a, b) => {
    //     let aName = a.muscle_group.name;
    //     let bName = b.muscle_group.name;
    //     if ((aName == "Other") || (bName == "Other") || (aName > bName)) return 1;
    //     else if (aName < bName) return -1;
    //     else return 0;
    // });

    useEffect(() => {
        // dispatch(getAllExercises());
        dispatch(getAllMuscles());
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
            <MuscleGroups />
            {/* {allExercises.map(({id, user_id, name, muscle_group, description, image}, index) => (
                <Exercise key={`exercise-${index}`}
                id={id}
                user_id={user_id}
                name={name}
                muscle_group={muscle_group}
                description={description}
                image={image}
                />
            ))} */}

        </div>
    )
}

export default ExercisesPage;
