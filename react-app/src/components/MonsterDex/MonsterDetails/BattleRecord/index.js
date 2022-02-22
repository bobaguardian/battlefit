
import { dateConverter } from "../../../LogsPage";

const BattleRecord = ({date, defeated}) => {
    return (
        <div className="battle-record">
            <p>{dateConverter(date)}</p>
            {defeated ? <p className="victory-text">Victory</p>
                : <p className="defeat-text">Defeat</p>}
        </div>
    );
}

export default BattleRecord
