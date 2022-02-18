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

	return (
        <div className="log-box">
            <div className="log-date-edit-delete-container">
                <p>{date}</p>
                <i className="fas fa-ellipsis-h edit-delete-menu"
                  onMouseEnter={() => {setShowEditDeleteMenu(true); setEdMenuId(id);}}
                  onMouseLeave={() => setShowEditDeleteMenu(false)}>
                  {(showEditDeleteMenu && (edMenuId === id)) ? (
                    <div className='edit-delete-log'
                      onMouseEnter={() => {setShowEditDeleteMenu(true); setEdMenuId(id);}}
                      onMouseLeave={() => setShowEditDeleteMenu(false)}>
                      <EditLogFormModal eId={id} eDate={date} eUnit={unit} eUnitCount={unit_count} eComment={comment} exerciseName={exercise.name}/>
                        <button className="delete-log-btn" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                  ) : null}
                </i>
            </div>
            <p>{exercise.name}</p>
            <p>{unit_count} {unit}</p>
            <p>{comment}</p>
            {/* <div className="edit-delete-log">
                <EditLogFormModal eId={id} eDate={date} eUnit={unit} eUnitCount={unit_count} eComment={comment} exerciseName={exercise.name}/>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div> */}
        </div>
	);
};

export default Log;
