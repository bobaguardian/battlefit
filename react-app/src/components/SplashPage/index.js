import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
import Footer from "../Footer";
import "./SplashPage.css";

const SplashPage = () => {

    const openSignupFormModal = () => {
		const events = ["mousedown", "click", "mouseup"];
		events.forEach((event) =>
			document.querySelector("#signup").dispatchEvent(
				new MouseEvent(event, {
					view: window,
					bubbles: true,
					cancelable: true,
					buttons: 1,
				})
			)
		);
	};

    return (
        <div className="splash-main-container">
            <nav className="splash-nav">
                <a className="Logo" href="/"><h1>BattleFit</h1></a>
                <div id="login-signup-container">
                    <LoginFormModal />
                    <SignUpFormModal />
                </div>
            </nav>
            <main className="splash-main-content">
                <div id="splash-text">
                    <h2>Welcome to BattleFit!</h2>
                    <p>Keep track of your exercises and logs while defeating and collecting mythical creatures!</p>
                </div>
                <div id="splash-ready" onClick={openSignupFormModal}>Ready to Battle?</div>
            </main>
            <Footer />
        </div>
    )
}

export default SplashPage;
