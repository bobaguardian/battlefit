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
            {muscles.map((muscle, index) => (
                <Link className="muscle-box" to={`/exercises/${muscle.name}`} key={`muscle-${index}`} className="muscle-box">
                    <h3>{muscle.name}</h3>
                    <img className="muscle-img" src={muscle.image} alt={`${muscle.name}-image`}></img>
                </Link>
            ))}
        </div>
    )


}

export default MuscleGroups;
