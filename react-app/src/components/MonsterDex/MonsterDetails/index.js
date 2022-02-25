import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import BattleRecord from "./BattleRecord";

const MonsterDetails = () => {
    const battlesById = useSelector(state => state.session.user.battles);
    const { id } = useParams();
    let battlesWithMonster = Object.values(battlesById).filter(battle => battle.monster.id === parseInt(id));

    if (battlesWithMonster.length === 0) {
        return <Redirect to='/error-page' />
    }

    battlesWithMonster = battlesWithMonster.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        return -1;
    })

    const monster = battlesWithMonster[0].monster;
    let defeatCount = 0;
    for (let i = 0; i < battlesWithMonster.length; i++) {
        if (battlesWithMonster[i].defeated) defeatCount++;
    }

    return (
        <div className="dash-main-container monster-details-container">
            <div className="monster-details-header">
                <h2>{monster.name}</h2>
                <p className="monster-no-lvl">No. {monster.id} Level {monster.level}</p>

            </div>
            <img className="monster-details-img" src={monster.image} alt={`${monster.name}-monster`}></img>

            <div className="monster-details-text">
                <p className="monster-description">{monster.description}</p>
                {defeatCount > 0 ? defeatCount === 1 ? <p className="monster-stamp"><i className="fa-solid fa-medal"></i> Defeated {defeatCount} time!</p>
                    : <p className="monster-stamp"><i className="fa-solid fa-medal"></i> Defeated {defeatCount} times!</p>
                    : <p className="monster-stamp">Encountered!</p>}
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
