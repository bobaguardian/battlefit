const Monster = ({id, name, image, description, level}) => {
    return (
        <div className="monster-box">
            <img src={image} alt={`${name}-monster`}></img>
            <h3>{name}  no. {id}   level {level}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Monster;
