import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import EditExerciseForm from "./EditExerciseForm";

function EditExerciseFormModal({ exercise }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button className="edit-exercise-btn" onClick={() => setShowModal(true)}>
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
