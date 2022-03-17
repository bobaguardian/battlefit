import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory, Redirect } from 'react-router-dom';

import { generateBattle } from "../../store/session";
import { setBattleVictory } from "../../store/session";
import { dateConverter } from "../LogsPage";
import Exercise from "../ExercisesPage/Exercise";
import BattleInstructions from "./BattleInstructions";
import "./BattlePage.css";

const levelConverter = {
    1: ["Easy", 2, "#BEFFC7"],
    2: ["Medium", 4, "#eca400"],
    3: ["Hard", 6, "#F87575"]
}

export const jsDateConverter = (str) => {
    let theDate = new Date(str);
    theDate.setDate(theDate.getDate())
    let mnth = ("0" + (theDate.getMonth() + 1)).slice(-2);
    let day = ("0" + theDate.getDate()).slice(-2);
  return [mnth, day, theDate.getFullYear()].join("/");
}

// const utcConversion = (d) => {
//     let dateUTC = moment.utc(d);
//     let localDate = moment(dateUTC).local();
//     return localDate;
// }

const BattlePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [hp, setHp] = useState(100);
    const [currentBattle, setCurrentBattle] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [victory, setVictory] = useState(false);
    const [battleLoading, setBattleLoading] = useState(true);

    // Set the current battle if one exists
    useEffect(() => { // when sessionUser state changes
        let lastBattle = sessionUser.battles.filter(battle => {
            return dateConverter(battle.date) === jsDateConverter(new Date()) &&
                !battle.defeated;
        })[0]

        if(lastBattle) {
            setCurrentBattle(lastBattle);
            setVictory(lastBattle.defeated);
            setHp(100);
        }
        setBattleLoading(false);

    }, [dispatch, sessionUser])

    // Update battle exercises and HP
    useEffect(() => {
        if (currentBattle){
            setExercises(currentBattle.exercises);
            setHp(((currentBattle.exercises.length
                / levelConverter[currentBattle.monster.level][1]) * 100).toFixed(0));
            setVictory(currentBattle.defeated)
        }
    }, [currentBattle])

    // DECREASE HP BAR
    useEffect(() => {
        // hp = 100, width = 300
        // hp = 50, width = 150

        let barWidth = Math.floor((hp / 100) * 300) // 300px width bar
        let bar = document.querySelector(".bar");
        if (bar) {
            if (hp < 30) {
                bar.style.backgroundColor = "#bf1a2f";
            } else if (hp < 60) {
                bar.style.backgroundColor = "#eca400";
            } else {
                bar.style.backgroundColor ="#71f79f";
            }
            bar.style.width = `${barWidth}px`;
        }

    }, [hp])


    // Update battle victory
    useEffect(() => {
        // When HP hits 0 dispatch update on battle, defeated = True
        if (parseInt(hp) === 0 && !currentBattle.defeated) {
            dispatch(setBattleVictory(currentBattle.id))
            setVictory(true);
        }

    }, [dispatch, hp, currentBattle])

    // Generates a new battle
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

        <div className="dash-main-container">
            {battleLoading ? null :
                <>
                    { victory || currentBattle?.defeated ?
                    <div className="battle-page-victory">
                        <div className="victory-header">
                            <h2>Victory!</h2>
                            <button className="generate-battle-btn" onClick={handleBattleGeneration}>Generate a New Battle</button>
                        </div>
                        <div className="victory-message">
                            <p><i className="fa-solid fa-medal"></i> You defeated {currentBattle.monster.name} <i className="fa-solid fa-medal"></i></p>
                            <p>Rest up, or battle another monster!</p>

                        </div>
                    </div>
                    :
                    !currentBattle ?
                        <div className="battle-page">
                            <h2>You don't have a current battle</h2>
                            <button className="generate-battle-btn" onClick={handleBattleGeneration}>Generate a New Battle</button>
                        </div>
                    :
                    <>
                        <BattleInstructions />
                        <div className="battle-monster-container">
                            <h2 className="fight-text">FIGHT</h2>
                            <div className="battle-monster-div">
                                { currentBattle ?
                                    <React.Fragment key={`battle-monster-div`}>
                                        <img className="battle-monster-img"
                                            src={currentBattle?.monster?.image}
                                            alt={`${currentBattle?.monster?.name}-monster`}></img>
                                        <div className="battle-monster-name-hp">
                                            <div className="battle-monster-name-level">
                                                <h3>{currentBattle?.monster?.name}</h3>
                                                <p>Difficulty: <span style={{color: `${levelConverter[currentBattle.monster.level][2]}`}}>
                                                        {levelConverter[currentBattle.monster.level][0]}</span>
                                                </p>

                                            </div>

                                            <div className="hp-monitor">
                                                <div className="hp-bar">
                                                    <div className='bar'></div>
                                                </div>
                                                <p>{hp}%</p>
                                            </div>

                                        </div>
                                        <p className="midnight-msg">You have until midnight to defeat this monster</p>
                                    </React.Fragment>
                                : null}
                            </div>

                            <div className="battle-exercises-container">
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
                    </>
                    }
                </>
            }
        </div>
    )
}

export default BattlePage;
