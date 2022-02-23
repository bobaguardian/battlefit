
import { dateConverter } from "../../../LogsPage";
import { jsDateConverter } from "../../../BattlePage";

const BattleRecord = ({date, defeated}) => {
    return (
        <div className="battle-record">
            <p>{dateConverter(date)}</p>

            {dateConverter(date) === jsDateConverter(new Date()) && !defeated ?
            <p className="battling-text">Battling</p>

            :
            <>
                {defeated ?

                    <p className="victory-text">Victory</p>
                    :

                    <p className="defeat-text">Defeat</p>}
            </>
        }

        </div>
    );
}

export default BattleRecord
