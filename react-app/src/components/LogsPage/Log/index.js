import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLog } from "../../../store/logs";
// import LogFormModal from "../../LogFormModal";

const Log = ({ id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeLog(id));
        return;
    }

	return (
        <div className="log-box">
            <p>{date}</p>
            <p>{exercise.name}</p>
            <p>{unit_count} {unit}</p>
            <p>{comment}</p>
            <div className="edit-delete-log">
                {/* <LogFormModal eId={id} eDate={date} eUnit={unit} eUnitCount={unit_count} eComment={comment} type="update" exerciseName={exercise.name} exercise_id={exercise.id}/> */}
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
	);
};

export default Log;
