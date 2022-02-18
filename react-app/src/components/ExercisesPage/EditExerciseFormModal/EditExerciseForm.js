import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { editExercise } from '../../../store/exercises';

const EditExerciseForm = ({ showModal, exercise }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);

	const [errors, setErrors] = useState({});
	const [name, setName] = useState(exercise.name);
	const [description, setDescription] = useState(exercise.description);
	const [image, setImage] = useState(exercise.image);
	const [muscle_group, setMuscleGroup] = useState(exercise.muscle_group.name);


    useEffect(() => {
        const errors = {};
        if (name.length > 100)
            errors["name"] = "Exercise name must be less than 100 characters.";
        setErrors(errors)
    }, [name])

	useEffect(() => { // clean memory leaks
		return () => {
			showModal(false);
			setErrors({});
			setName("");
			setDescription("");
			setImage(null);
			setMuscleGroup("Abs");
		}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

        const data = await dispatch(editExercise(
            exercise.id,
            name,
            muscle_group,
            description,
            image,
        ));

        if (data) {
            const errors = {};
            for (let i = 0; i < data.length; i++) {
				const error = data[i].split(": ");
				errors[error[0]] = error[1];
			}
			setErrors(errors);
			return;
        }

		if (location.pathname !== `/exercises/${muscle_group}`) {
			history.push(`/exercises/${muscle_group}`);
		}

		showModal(false);
        return;
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
			<h3 className="form-heading">Edit Your Exercise</h3>

			<div className="form-group">
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
			<div className="form-group select">
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

			<div className="form-group">
				<label className="form-label" htmlFor="description">
					Description
				</label>
				<textarea
					className="form-input"
					name="description"
					type="text"
					value={description}
					onChange={updateDescription}
					rows='7'
					cols='32'
				/>
				<div className="errors-container">
					{errors.description ? `${errors.description}` : ""}
				</div>
			</div>


            <button
				type="submit"
				className="exercise-form-submit-btn"
				>Submit</button>
		</form>
	);
};

export default EditExerciseForm;
