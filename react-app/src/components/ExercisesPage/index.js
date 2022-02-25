import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMuscles } from "../../store/muscles";
import AddExerciseFormModal from "./AddExerciseFormModal";
import MuscleGroups from "./MuscleGroups";
import './ExercisesPage.css';
import './ExerciseForm.css';

const ExercisesPage = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllMuscles());
    // }, [dispatch])

    return (
        <div className="dash-main-container">
            <div className="heading-add-exercise-div">
                <h2>Exercises by Muscle Group</h2>
                <div className="add-exercise-button-container">
                    <AddExerciseFormModal />
                </div>
            </div>
            <MuscleGroups />
        </div>
    )
}

export default ExercisesPage;
