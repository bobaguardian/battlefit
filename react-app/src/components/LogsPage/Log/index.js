import { useDispatch } from "react-redux";
import { removeLog } from "../../../store/logs";
import EditLogFormModal from "../EditLogFormModal";

const unitConverter = {
    "Reps": "reps",
    "Weight": "lbs",
    "Time": "sec",
    "Distance": "mi"
}

const timeConverter = (sec) => {
    let resultStr = '';
    let remainingSec = sec;
    if (remainingSec < 86400) { // hour
        let hours = Math.floor(remainingSec/3600);
        if (hours !== 0) {
            resultStr += `${hours} hr`;
            remainingSec = remainingSec - (hours * 3600);
        }

    }
    if (60 < remainingSec < 3600) { // min
        let mins = Math.floor(remainingSec/60)
        if (mins !== 0) {
            resultStr += ` ${Math.floor(remainingSec/60)} min`;
            remainingSec = remainingSec - (mins * 60);
        }

    }
    if (remainingSec < 60 )  { // sec
        if (remainingSec !== 0) resultStr += ` ${remainingSec} sec`;
    }

    return resultStr
}
const dateConverter = (str) => {
    let theDate = new Date(str);
    theDate.setDate(theDate.getDate() + 1)
    let mnth = ("0" + (theDate.getMonth() + 1)).slice(-2);
    let day = ("0" + theDate.getDate()).slice(-2);
  return [theDate.getFullYear(), mnth, day].join("-");
}

const Log = ({ id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}) => {
	const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeLog(id));
        return;
    }

	return (
        // style={{display: "none"}}
        <div className={`log-box log-${date}`}
            style={{height: 0, overflow: "hidden", opacity: 0, padding: 0}} >
            <div className="log-details">
                <div className="exercise-unit-div">
                    <h3>{exercise.name}</h3>
                    {unit !== "Time" ?
                    <p>{unit_count} {unitConverter[unit]}</p>
                    : <p>{timeConverter(unit_count)}</p>
                    }
                </div>
                <p className="log-comment">{comment}</p>
            </div>
            <div className='edit-delete-log'>
                <EditLogFormModal eId={id} eDate={dateConverter(date)} eUnit={unit} eUnitCount={unit_count} eComment={comment} exerciseName={exercise.name}/>
                <button className="delete-log-btn shake-icon" onClick={handleDelete}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
            </div>
        </div>
	);
};

export default Log;
