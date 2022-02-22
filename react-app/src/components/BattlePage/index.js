import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { generateMonsterExercises } from "../../store/exercises";
import { generateBattle } from "../../store/session";
import { setBattleVictory } from "../../store/session";
import { dateConverter } from "../LogsPage";
import Exercise from "../ExercisesPage/Exercise";
import "./BattlePage.css";

const levelConverter = {
    1: ["easy", 2],
    2: ["medium", 4],
    3: ["hard", 6]
}

const jsDateConverter = (str) => {
    let theDate = new Date(str);
    theDate.setDate(theDate.getDate())
    let mnth = ("0" + (theDate.getMonth() + 1)).slice(-2);
    let day = ("0" + theDate.getDate()).slice(-2);
  return [mnth, day, theDate.getFullYear()].join("/");
}

const BattlePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [hp, setHp] = useState(100);
    const [currentBattle, setCurrentBattle] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [victory, setVictory] = useState(false);
    const [oldBattle, setOldBattle] = useState(null);


    useEffect(() => { // when sessionUser state changes
        let lastBattle = sessionUser.battles.filter(battle => {
            return dateConverter(battle.date) === jsDateConverter(new Date()) &&
                !battle.defeated;
        })[0]

       if(lastBattle) {
           setCurrentBattle(lastBattle);
           setOldBattle(lastBattle)
       }

    }, [dispatch, sessionUser])

    useEffect(() => {
        if (currentBattle){
            setExercises(currentBattle.exercises);
            setHp(((currentBattle.exercises.length
                / levelConverter[currentBattle.monster.level][1]) * 100).toFixed(0));
            setVictory(currentBattle.defeated)
        }
    }, [currentBattle])

    useEffect(() => {
        // When HP hits 0 dispatch update on battle, defeated = True
        if (parseInt(hp) === 0 && !currentBattle.defeated) {
            dispatch(setBattleVictory(currentBattle.id))
            setVictory(true);
        }

    }, [hp])

    const handleBattleGeneration = async (e) => {
        e.preventDefault();
        async function fetchNewBattle() {
            const data = await dispatch(generateBattle())
            setCurrentBattle(data);
        }

        fetchNewBattle();
        setVictory(false);
    }

    return (
        <div className="dash-main-container battle-page">
            { victory ?
            <div>
                <h2>Victory!</h2>
                <p>You defeated {currentBattle.monster.name}</p>
                <p>Rest up, or battle another monster!</p>
                <button onClick={handleBattleGeneration}>Generate a New Battle</button>
            </div>
            :
            !oldBattle ?
                <div>
                    <h2>You don't have a battle for today</h2>
                    <button onClick={handleBattleGeneration}>Generate a New Battle</button>
                </div>
            :
            <div>
                <h2>Fight!</h2>
                <div className="battle-monster-div">
                    { currentBattle ?
                        <React.Fragment key={`battle-monster-div`}>
                            <img className="battle-monster-img"
                                src={currentBattle?.monster?.image}
                                alt={`${currentBattle?.monster?.name}-monster`}></img>
                            <h3>{currentBattle?.monster?.name}</h3>
                            <p>HP: {hp}%</p>

                        </React.Fragment>
                    : null}
                </div>

                <div>
                {exercises?.map(({id, user_id, name, muscle_group, description, image}, index) => (
                        <Exercise key={`monster-exercise-${index}`}
                        id={id}
                        name={name}
                        monsterName={currentBattle.monster.name}
                        battleId={currentBattle.id}
                        />
                    ))}
                </div>

            </div>
            }
        </div>
    )
}

export default BattlePage;
