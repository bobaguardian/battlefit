import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BattleRecord from "./BattleRecord";

const MonsterDetails = () => {
    const dispatch = useDispatch();
    const battlesById = useSelector(state => state.session.user.battles);
    const { id } = useParams();
    const battlesWithMonster = Object.values(battlesById).filter(battle => battle.monster.id === parseInt(id));
    console.log(battlesWithMonster);
    const monster = battlesWithMonster[0].monster;
    let defeatCount = 0;
    for (let i = 0; i < battlesWithMonster.length; i++) {
        if (battlesWithMonster[i].defeated) defeatCount++;
    }
    console.log("Defeat Count", defeatCount);


    return (
        <div className="dash-main-container monster-details-container">
            <div className="monster-details-header">
                <h2>{monster.name}</h2>
                <p>No. {monster.id} Level {monster.level}</p>

            </div>
            <img className="monster-details-img" src={monster.image} alt={`${monster.name}-monster`}></img>

            <div className="monster-details-text">
                <p className="monster-description">{monster.description}</p>
                {defeatCount > 0 ? defeatCount === 1 ? <p>Defeated {defeatCount} time!</p>
                    : <p>Defeated {defeatCount} times!</p>
                    : <p>Encountered!</p>}
            </div>

            <div className="battle-records-container">
                <h3>Battle Records</h3>
                {battlesWithMonster.map(({date, defeated}, index) => (
                    <BattleRecord key={`battle-record-${index}`} date={date} defeated={defeated}/>
                ))}

            </div>

        </div>
    )
}

export default MonsterDetails;
