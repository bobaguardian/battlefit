import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addLog } from '../../../store/logs';
import { removeBattleExercise } from "../../../store/session";

const AddBattleLogForm = ({ showModal, battleId, exercise_id, exerciseName, monsterName}) => {
	const dispatch = useDispatch();

    let today = new Date();
    const offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - (offset*60*1000));
    today = today.toISOString().split('T')[0];

	const [errors, setErrors] = useState({});
	const [date, setDate] = useState(today);
    const [unit_id, setUnitId] = useState(1);
	const [unit_count, setUnitCount] = useState(1);
	const [comment, setComment] = useState(`Log to defeat ${monsterName}!`);

    useEffect(() => {
        const errors = {};
        if (unit_count < 1)
            errors["unit_count"] = "Unit count can't be negative.";
        setErrors(errors);
    }, [unit_count])

    useEffect(() => {
		return () => {
			showModal(false);
			setErrors({});
			setDate(null);
			setUnitId(1);
			setUnitCount(1);
			setComment("");
		}
	}, [showModal]);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(addLog(
			date,
			exercise_id,
			unit_id,
			unit_count,
			comment
		));

        if (data) {
            const errors = {};
            for (let i = 0; i < data.length; i++) {
				const error = data[i].split(": ");
				errors[error[0]] = error[1]
			}
			setErrors(errors);
			return;
        }
        // TODO AFTER SUBMIT LOG, DISPATCH DELETE ON battles_exercises record
        await dispatch(removeBattleExercise(battleId, exercise_id));


		showModal(false);
        return;
	};


    const updateComment = (e) => {
        setComment(e.target.value);
    }

    const updateUnitId = (e) => {
        setUnitId(e.target.value);
    }

    const updateUnitCount = (e) => {
        setUnitCount(e.target.value);
    }

	return (
		<form className="form-container log-form" onSubmit={handleSubmit}>
            <h2 className="form-heading">Attack: Log {exerciseName}</h2>
			<div className="form-group">
                <h4>Date: {date}</h4>
			</div>

			<div className="form-group select">
				<label className="form-label" htmlFor="unit_id">
					Unit
				</label>
				<select name="unit_id"
					className="form-input"
					value={unit_id}
					onChange={updateUnitId}>
					<option value={1}>Reps</option>
					<option value={2}>Weight (lbs) </option>
					<option value={3}>Time (sec)</option>
					<option value={4}>Distance (mi)</option>

				</select>

				<div className="errors-container">
					{errors.unit_id ? `${errors.unit_id}` : ""}
				</div>
			</div>

			<div className="form-group">
				<label className="form-label" htmlFor="unit_count">
					Unit Count
				</label>
				<input
					className="form-input"
					name="unit_count"
					type="number"
					value={unit_count}
					onChange={updateUnitCount}
				/>
				<div className="errors-container">
					{errors.unit_count ? `${errors.unit_count}` : ""}
				</div>
			</div>

            <div className="form-group">
				<label className="form-label" htmlFor="comment">
					Comment
				</label>
				<textarea
					className="form-input"
					name="comment"
					type="text"
					value={comment}
					onChange={updateComment}
					rows='7'
					cols='32'
				/>
				<div className="errors-container">
					{errors.comment ? `${errors.comment}` : ""}
				</div>
			</div>


            <button
				type="submit"
				className="log-form-submit-btn"
				>Log It!</button>
		</form>
	);
};

export default AddBattleLogForm;
