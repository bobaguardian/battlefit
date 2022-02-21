import { useSelector } from "react-redux";
import Monster from "./Monster";
import "./MonsterDex.css";

const MonsterDex = () => {

    const monstersById = useSelector(state => state.monsters.byId);
    const monsters = Object.values(monstersById);


    return (
        <div className="dash-main-container">
            <h2>Monster Dex</h2>
            <div className="monsters-container">
                {monsters.map(( {id, name, image, description, level} ,index) => (
                    <Monster key={`monster-dex-${index}`}
                        id={id} name={name} image={image} description={description} level={level}/>
                ))}
            </div>
        </div>
    )
}

export default MonsterDex;
