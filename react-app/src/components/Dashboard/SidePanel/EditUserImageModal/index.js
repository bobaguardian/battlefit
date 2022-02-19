import React, { useState } from "react";
import { Modal } from '../../../../context/Modal';
import EditUserImage from "./EditUserImage";

function EditUserImageModal({ user }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				id="edit-user"
				onClick={() => setShowModal(true)}
				className="edit-user-pic-btn"
			>
				<i className="fas fa-edit"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditUserImage showModal={setShowModal} user={user} />
				</Modal>
			)}
		</>
	);
}

export default EditUserImageModal;
