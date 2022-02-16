import React, { useState, useEffect } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "./SignUpForm";

import './SignupForm.css';

function SignUpFormModal() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		return () => setShowModal(false);
	}, []);

	return (
		<>
			<div
				id="signup"
				className="login-signup"
				onClick={() => setShowModal(true)}
			>
				Sign Up
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<SignUpForm />
				</Modal>
			)}
		</>
	);
}

export default SignUpFormModal;
