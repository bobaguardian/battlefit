import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


import Exercise from "../ExercisesPage/Exercise";
import AddExerciseFormModal from "../ExercisesPage/AddExerciseFormModal";
import { getUserExercises } from "../../store/exercises";


const UserExercisesPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const exercises = Object.values(exercisesbyId)

    useEffect(() => {
        (async() => {
            const data = await dispatch(getUserExercises(id));
            if (data) { // user doesn't exist
                history.push('/error-page')
            }
        })();
      }, [dispatch, history, id]);

    return (
        <div className="dash-main-container">
            <div className="heading-add-exercise-div">
                {exercises.length ?
                <h2>{exercises[0].user.username}'s Exercises</h2>
                :
                <h2>This user does not have any exercises yet!</h2>
                }
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

export default UserExercisesPage;
