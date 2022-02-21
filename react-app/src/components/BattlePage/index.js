import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
    const [hp, setHp] = useState(100);
    const [currentBattle, setCurrentBattle] = useState(null);

    console.log(currentBattle?.monster?.name);
    console.log("CURRENT BATTLE", currentBattle);

    // if (!currentBattle) {
    //     // dispatch generate a new battle
    //     currentBattle = dispatch(generateBattle());
    //     console.log("NEW BATTLE")
    // }

    useEffect(() => {
        async function fetchNewBattle() {
            const data = await dispatch(generateBattle())
            setCurrentBattle(data);
        }

        let oldBattle = sessionUser.battles.filter(battle => {
            console.log(battle.id, dateConverter(battle.date), jsDateConverter(new Date()), battle.defeated)
            return dateConverter(battle.date) === jsDateConverter(new Date()) &&
                !battle.defeated;
        })[0]

       if(oldBattle) setCurrentBattle(oldBattle);
       else fetchNewBattle();

    }, [dispatch])

    // const res = fetch(`/api/battles/generate_exercises/${levelConverter[currentBattle.monster.level][1]}`);
    // let data = await res.json();
    // let exercises = data["exercises"];
    // console.log("FRONT END EXERCISES", exercises);

    return (
        <div className="dash-main-container battle-page">
            <h2>Fight!</h2>
            <div className="battle-monster-div">
                <img className="battle-monster-img"
                    src={currentBattle?.monster?.image}
                    alt={`${currentBattle?.monster?.name}-monster`}></img>
                <h3>{currentBattle?.monster?.name}</h3>
                <p>HP: {hp}%</p>
            </div>

            {/* <div>
                {exercises?.map(({id, user_id, name, muscle_group, description, image}, index) => (
                    <Exercise />
                ))}
            </div> */}

        </div>
    )
}

export default BattlePage;
