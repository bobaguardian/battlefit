import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const MuscleGroups = () => {
    const musclesById = useSelector(state => state.muscles.byId);
    const muscles = Object.values(musclesById);

    return (
        <div className="muscles-container">
            {muscles.map((muscle, index) => (
                <Link className="muscle-box" to={`/exercises/${muscle.name}`} key={`muscle-${index}`}>
                    <h3>{muscle.name}</h3>
                    <img className="muscle-img" src={muscle.image} alt={`${muscle.name}-pic`}></img>
                </Link>
            ))}
        </div>
    )


}

export default MuscleGroups;
