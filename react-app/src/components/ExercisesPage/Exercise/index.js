import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { removeExercise } from "../../../store/exercises";
import EditExerciseFormModal from "../EditExerciseFormModal";
import AddLogFormModal from "../../LogsPage/AddLogFormModal";

const Exercise = ({ id, user_id, name, muscle_group, description, image }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);
    const exercise = {id, user_id, name, muscle_group, description, image};

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeExercise(id));
        return;
    }

	return (
        <div className="exercise-box">
            <div className="exercise-detail-container">
                <h3>{name}</h3>
                {/* <div className="add-log-on-exercise-container">
                    <AddLogFormModal exercise_id={id} exerciseName={name}/>
                </div> */}
                <p>{muscle_group.name}</p>
                <p>{description}</p>
            </div>
            {image ? <img src={image}></img> : null}
            {/* <div className="delete-exercise-container"> */}
                { sessionUser.id === user_id ?
                <div className="add-log-edit-delete-exercise">
                    <AddLogFormModal exercise_id={id} exerciseName={name}/>
                    <EditExerciseFormModal exercise={exercise} />
                    <button className="delete-exercise-btn" onClick={handleDelete}>
                        <i className="fa-solid fa-square-minus"></i>
                    </button>
                </div>
                : null}
            {/* </div> */}
        </div>
	);
};

export default Exercise;
