import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { createExercise } from '../../../store/exercises';

const AddExerciseForm = ({ showModal }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);

	const [errors, setErrors] = useState({});
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const [muscle_group, setMuscleGroup] = useState("");



	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Add Exercise Submit!")
		if (location.pathname !== "/exercises") {
			history.push("/exercises");
		}

		showModal(false);
	};


    const updateName = (e) => {
		setName(e.target.value);
	};

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateImage = (e) => {
        setImage(e.target.value);
    }

    const updateMuscleGroup = (e) => {
        setMuscleGroup(e.target.value);
    }

	return (
		<form className="form-container exercise-form" onSubmit={handleSubmit}>
			<h3 className="">Add a New Exercise</h3>
			<div className="form-input-container">
				<div className="form-element">
					<label className="form-label" htmlFor="name">
						Exercise Name
					</label>
                    <input
                        className="form-input"
                        name="name"
                        type="text"
                        value={name}
                        onChange={updateName}
                        required
                    />

					<div className="errors-container">
						{errors.name ? `${errors.name}` : ""}
					</div>
				</div>
				<div className="form-element">
					<label className="form-label" htmlFor="muscle_group">
						Muscle Group
					</label>
                    <select name="muscle_group"
                        className="form-input"
                        name="muscle_group"
                        value={muscle_group}
                        onChange={updateMuscleGroup}>

                        <option value="Abs">Abs</option>
                        <option value="Back">Back</option>
                        <option value="Biceps">Biceps</option>
                        <option value="Calves">Calves</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Chest">Chest</option>
                        <option value="Forearms">Forearms</option>
                        <option value="Glutes">Glutes</option>
                        <option value="Legs">Legs</option>
                        <option value="Shoulders">Shoulders</option>
                        <option value="Triceps">Triceps</option>
                        <option value="Other">Other</option>
                    </select>

					<div className="errors-container">
						{errors.muscle_group ? `${errors.muscle_group}` : ""}
					</div>
				</div>

                <div className="form-element">
					<label className="form-label" htmlFor="description">
						Description
					</label>
					<input
						className="form-input"
						name="description"
						type="text"
						value={description}
						onChange={updateDescription}
					/>
					<div className="errors-container">
						{errors.description ? `${errors.description}` : ""}
					</div>
				</div>

			</div>
		</form>
	);
};

export default AddExerciseForm;
