const Monster = ({id, name, image, description, level}) => {
    return (
        <div className="monster-box">
            <img className="monster-img" src={image} alt={`${name}-monster`}></img>
            <div className="monster-details">
                <h3>No. {id} {name}</h3>
                {/* <p>{description}</p> */}
            </div>
        </div>
    )
}

export default Monster;
