import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLog } from "../../../store/logs";
import EditLogFormModal from "../EditLogFormModal";

const unitConverter = {
    "Reps": "reps",
    "Weight": "lbs",
    "Time": "sec",
    "Distance": "mi"
}

const timeConverter = (sec) => {
    if (sec < 60) return `${sec} sec`;
    if (60 < sec < 3600) { // min
        return `${Math.floor(sec/60)} min`;
    } else if (3600 < 86400) {
        return `${Math.floor(sec/3600)} min`;
    }
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
	const sessionUser = useSelector((state) => state.session.user);
    const [showEditDeleteMenu, setShowEditDeleteMenu] = useState(false);
    const [edMenuId, setEdMenuId] = useState();


    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeLog(id));
        return;
    }

    const handleShowEDMenu = (e) => {
        e.preventDefault();
        setShowEditDeleteMenu(true);
        setEdMenuId(id);
    }

    const handleHideEDMenu = (e) => {
        setShowEditDeleteMenu(false);
    }

	return (
        <div className="log-box">
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
                <EditLogFormModal setShowEditDeleteMenu={setShowEditDeleteMenu} eId={id} eDate={dateConverter(date)} eUnit={unit} eUnitCount={unit_count} eComment={comment} exerciseName={exercise.name}/>
                <button className="delete-log-btn" onClick={handleDelete}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
            </div>
        </div>
	);
};

export default Log;
