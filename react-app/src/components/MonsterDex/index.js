import React from "react";
import { useSelector } from "react-redux";

import Monster from "./Monster";
import "./MonsterDex.css";

const MonsterDex = () => {
    // MONSTERS ENCOUNTERED
    const battlesById = useSelector(state => state.session.user.battles);
    const battles = Object.values(battlesById).sort((a, b) => {
        if (a.monster.id > b.monster.id) return 1;
        else return -1;
    });

    let monsters = battles.map(battle => battle.monster);
    let lastMonster = "look! an easter egg!";

    const setLastMonster = (name) => {
        lastMonster = name;
    }

    return (
        <div className="dash-main-container">
            <h2>Monster Dex <i className="fa-solid fa-dragon"></i></h2>
            { !monsters || monsters.length === 0 ?
                <div className="empty-message-div">
                    <h2>No monsters encountered yet!</h2>
                </div>
            : null
            }
            <div className="monsters-container">
                {monsters.map(( {id, name, image, description, level} ,index) => (
                    <React.Fragment key={`monster-div-${index}`}>
                        {lastMonster === name ? null :
                            <Monster key={`monster-dex-${index}`} setLastMonster={setLastMonster(name)}
                                id={id} name={name} image={image} description={description} level={level}/>

                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default MonsterDex;
