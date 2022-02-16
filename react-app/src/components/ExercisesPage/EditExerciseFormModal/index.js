import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import EditExerciseForm from "./EditExerciseForm";

function EditExerciseFormModal({ exercise }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>
				Edit Exercise
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
