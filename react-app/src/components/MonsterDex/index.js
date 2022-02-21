import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { getAllMonsters } from "../../store/monsters";
import Monster from "./Monster";
import "./MonsterDex.css";

const MonsterDex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // ALL MONSTERS
    // const monstersById = useSelector(state => state.monsters.byId);
    // const monsters = Object.values(monstersById);

    // MONSTERS ENCOUNTERED
    const battlesById = useSelector(state => state.session.user.battles);
    const battles = Object.values(battlesById).sort((a, b) => {
        if (a.monster.id > b.monster.id) return 1;
        else return -1;
    });

    let monsters = battles.map(battle => battle.monster);
    let lastMonster = "blah";

    const setLastMonster = (name) => {
        lastMonster = name;
    }

    return (
        <div className="dash-main-container">
            <h2>Monster Dex</h2>
            <div className="monsters-container">
                {monsters.map(( {id, name, image, description, level} ,index) => (
                    <>
                        {lastMonster === name ? null :
                            <>
                                {setLastMonster(name)}
                                <Monster key={`monster-dex-${index}`}
                                    id={id} name={name} image={image} description={description} level={level}/>
                            </>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default MonsterDex;
