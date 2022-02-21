import { useHistory } from 'react-router-dom';


const Monster = ({id, name, image, description, level}) => {
    const history = useHistory();

    const goToMonsterDetails = async (e) => {
        e.preventDefault();
        history.push(`/monsters/${id}`)
    }

    return (
        <div className="monster-box" onClick={goToMonsterDetails}>
            <img className="monster-img" src={image} alt={`${name}-monster`}></img>
            <div className="monster-details">
                <h3>No. {id} {name}</h3>
                {/* <p>{description}</p> */}
            </div>
        </div>
    )
}

export default Monster;