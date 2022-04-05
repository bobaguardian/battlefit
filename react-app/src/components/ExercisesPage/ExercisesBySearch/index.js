import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import Exercise from "../Exercise";
import ExerciseSearchBar from "../../ExerciseSearchBar";
import AddExerciseFormModal from "../AddExerciseFormModal";
import { getAllExercises, readExercisesSearch } from "../../../store/exercises";


const ExercisesBySearch = () => {

  const dispatch = useDispatch();
    const location = useLocation();
    const searchQuery = useParams().searchQuery;
    const exercisesbyId = useSelector(state => state.exercises.byId);
    const exercises = Object.values(exercisesbyId);

    useEffect(() => {
      if (searchQuery !== "") {
        dispatch(readExercisesSearch(searchQuery))
      } else {
        dispatch(getAllExercises(""));
      }
    }, [dispatch, location.pathname, searchQuery])


  return (
    <div className="dash-main-container">
            <div className="heading-add-exercise-div">
                <h2>Exercise Results for "{searchQuery}"</h2>
                <div className="add-exercise-button-container">
                    <AddExerciseFormModal />
                </div>
                <ExerciseSearchBar query={searchQuery} />
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
                    showMuscle={true}
                    />
                ))}

            </div>

        </div>
  )
}

export default ExercisesBySearch;
