import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { addExercise } from '../../../store/exercises';

const AddExerciseForm = ({ showModal }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);


	const [errors, setErrors] = useState({});
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const [imageLoading, setImageLoading] = useState(false);
	const [muscle_group, setMuscleGroup] = useState("Abs");

	useEffect(() => {
        const errors = {};
        if (name.length > 100)
            errors["name"] = "Exercise name must be less than 100 characters.";
        setErrors(errors);
    }, [name])

	useEffect(() => { // clean memory leaks
		return () => {
			showModal(false);
			setErrors({});
			setName("");
			setDescription("");
			setImage(null);
			setImageLoading(false);
			setMuscleGroup("Abs");
		}
	}, [showModal]);


	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("muscle_group", muscle_group);
		formData.append("description", description);
		if (image) {
			formData.append("image", image);
			setImageLoading(true);
		}
        const data = await dispatch(addExercise(formData));
		setImageLoading(false);


        if (data) {
            const errors = {};
            for (let i = 0; i < data.length; i++) {
				const error = data[i].split(": ");
				errors[error[0]] = error[1]
			}
			setErrors(errors);
			setImageLoading(false);

			return;
        }
		if (location.pathname !== `/users/${sessionUser.id}`) {
			history.push(`/users/${sessionUser.id}`);
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
		const file = e.target.files[0];
        setImage(file);
    }

    const updateMuscleGroup = (e) => {
        setMuscleGroup(e.target.value);
    }

	return (
		<form className="form-container exercise-form" onSubmit={handleSubmit}>
			<h2 className="form-heading">Add a New Exercise</h2>

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
					rows="7"
					cols='32'

				/>
				<div className="errors-container">
					{errors.description ? `${errors.description}` : ""}
				</div>
			</div>

			<div className="upload-image-container">
				<input
				id="file-upload"
				type="file"
				accept="image/*"
				onChange={updateImage}
				></input>
				<div className="preview-image-container">
				{image && (
					<img
					alt="preview"
					src={URL.createObjectURL(image)}
					className="preview-image"
					></img>
					)}
				</div>
				<label htmlFor="file-upload">Upload Photo</label>
				{imageLoading && (
				<p>
					<i className="fas fa-spinner fa-pulse"></i>
				</p>
				)}
			</div>

            <button
				type="submit"
				className="exercise-form-submit-btn"
				>Submit</button>
		</form>
	);
};

export default AddExerciseForm;
