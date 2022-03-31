import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm";
import './LoginForm.css';

function LoginFormModal({ text }) {
	const [showModal, setShowModal] = useState(false);

	text = text ? text : "Log In";

	return (
		<>
			<div
				id="login"
				className="login-signup login-on-signup"
				onClick={() => setShowModal(true)}
			>
				{text}
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<LoginForm />
				</Modal>
			)}
		</>
	);
}

export default LoginFormModal;
