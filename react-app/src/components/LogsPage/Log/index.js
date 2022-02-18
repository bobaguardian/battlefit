import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLog } from "../../../store/logs";

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
            <p>{new Date(date).toDateString()}</p>
            <p>{exercise.name}</p>
            <p>{unit_count} {unit}</p>
            <p>{comment}</p>
            <div className="edit-delete-log">
                <button>
                    Edit
                </button>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
	);
};

export default Log;
