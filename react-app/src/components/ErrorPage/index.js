import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
	return (
		<div className="error-page-container">
			<div className="error-code-message">
				<h1>404 <i className="fa-solid fa-triangle-exclamation"></i></h1>
				<h2 className="error-code">Oops! You just left the fantasy world of BattleFit. The resource you requested cannot be found.</h2>
				<Link to="/">
					<h2 className="home-link">Hop in this rocket back to home base <i className="fa-solid fa-rocket"></i></h2>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
