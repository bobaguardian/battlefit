const Monster = ({id, name, image, description, level}) => {
    return (
        <div className="monster-box">
            <img src={image} alt={`${name}-monster`}></img>
            <div className="monster-details">
                <h3>{name}  no. {id}   level {level}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Monster;
