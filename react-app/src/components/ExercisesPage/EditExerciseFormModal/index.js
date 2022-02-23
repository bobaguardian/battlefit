import React, { useState, useEffect } from "react";
import { Modal } from "../../../context/Modal";
import EditExerciseForm from "./EditExerciseForm";

function EditExerciseFormModal({ exercise }) {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => { // clean memory leaks
		return () => {
			setShowModal(false);
		}
	}, []);

	return (
		<>
			<button className="edit-exercise-btn  shake-icon" onClick={() => setShowModal(true)}>
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditExerciseForm showModal={setShowModal} exercise={exercise} />
				</Modal>
			)}
		</>
	);
}

export default EditExerciseFormModal;
