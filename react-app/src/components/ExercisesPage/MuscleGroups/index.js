import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllMuscles } from "../../../store/muscles";

const MuscleGroups = () => {
    const dispatch = useDispatch();
    const musclesById = useSelector(state => state.muscles.byId);
    const muscles = Object.values(musclesById);

    useEffect(() => {
        dispatch(getAllMuscles());
    }, [dispatch])

    return (
        <div className="muscles-container">
            <h2> Muscles Container </h2>
            {muscles.map((muscle, index) => (
                <Link to={`/exercises/${muscle.name}`} key={`muscle-${index}`} className="muscle-box">
                    <h3>{muscle.name}</h3>
                </Link>
            ))}

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

export default MuscleGroups;
