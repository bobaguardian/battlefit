import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLog } from "../../../store/logs";
import EditLogFormModal from "../EditLogFormModal";

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
                <p>{date}</p>
                <p>{exercise.name}</p>
                <p>{unit_count} {unit}</p>
                <p>{comment}</p>
            </div>
            <div className='edit-delete-log'>
                <EditLogFormModal setShowEditDeleteMenu={setShowEditDeleteMenu} eId={id} eDate={date} eUnit={unit} eUnitCount={unit_count} eComment={comment} exerciseName={exercise.name}/>
                <button className="delete-log-btn" onClick={handleDelete}>
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
            </div>
        </div>
	);
};

export default Log;
