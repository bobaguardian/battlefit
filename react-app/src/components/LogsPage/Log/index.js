import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Log = ({ id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	return (
        <div className="log-box">
            <p>{new Date(date).toDateString()}</p>
            <p>{exercise.name}</p>
            <p>{unit_count} {unit}</p>
            <p>{comment}</p>
        </div>
	);
};

export default Log;
