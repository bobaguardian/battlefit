import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MonsterDetails = () => {
    const dispatch = useDispatch();
    const battlesById = useSelector(state => state.session.user.battles);
    const { id } = useParams();
    console.log(id);

    const battlesWithMonster = Object.values(battlesById).filter(battle => battle.monster.id === parseInt(id));
    console.log(battlesWithMonster);
    const monster = battlesWithMonster[0].monster;


    return (
        <div className="dash-main-container monster-details-container">
            <div className="monster-details-header">
                <h2>{monster.name}</h2>
                <p>No. {monster.id} Level {monster.level}</p>

            </div>
            <img className="monster-details-img" src={monster.image} alt={`${monster.name}-monster`}></img>

            <div>
                <p>{monster.description}</p>
                <p>Date: {battlesWithMonster[0].date}</p>
                {battlesWithMonster[0].defeated ? <p>Defeated!</p> : <p>Encountered!</p>}
            </div>

        </div>
    )
}

export default MonsterDetails;
