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
                <h3 className="monster-no-name">No. {id} {name}</h3>
            </div>
        </div>
    )
}

export default Monster;
