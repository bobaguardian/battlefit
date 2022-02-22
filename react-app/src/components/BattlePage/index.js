import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { generateMonsterExercises } from "../../store/exercises";
import { generateBattle } from "../../store/session";
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
    const monsterExercisesById = useSelector(state => state.exercises.monsterExercises);
    const monsterExercises = Object.values(monsterExercisesById)
    const [hp, setHp] = useState(100);
    const [currentBattle, setCurrentBattle] = useState(null);
    // const [exercises, setExercises] = useState(monsterExercises);
    const [exercises, setExercises] = useState(JSON.parse(localStorage.getItem("monsterExercises")));

    console.log("EXERCISES", exercises);
    console.log("MONSTER EXERCISES", monsterExercisesById);

    useEffect(() => { // when sessionUser state changes
        async function fetchNewBattle() {
            const data = await dispatch(generateBattle())
            setCurrentBattle(data);
            // after fetching new battle, generate new exercises
            // and store them in local storage
            dispatch(generateMonsterExercises(levelConverter[currentBattle.monster.level][1]))
            localStorage.setItem("monsterExercises", JSON.stringify(monsterExercises));
        }

        let oldBattle = sessionUser.battles.filter(battle => {
            return dateConverter(battle.date) === jsDateConverter(new Date()) &&
                !battle.defeated;
        })[0]

       if(oldBattle) {
           setCurrentBattle(oldBattle);
       }
       else fetchNewBattle();

    }, [dispatch, sessionUser])

    useEffect(() => { // when currentBattle changes
        if (currentBattle && JSON.parse(localStorage.getItem("monsterExercises")).length === 0 &&
            exercises?.length === 0) dispatch(generateMonsterExercises(levelConverter[currentBattle.monster.level][1]))

    }, [currentBattle])

    return (
        <div className="dash-main-container battle-page">
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
                    />
                ))}
            </div>
        </div>
    )
}

export default BattlePage;
