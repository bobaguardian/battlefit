import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
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
                <a href="/"><h1>BattleFit</h1></a>
                <div id="login-signup-container">
                    <LoginFormModal />
                    <SignUpFormModal />
                </div>
            </nav>
            <main className="splash-main-content">
                <h2>Welcome to BattleFit!</h2>
                <div id="splash-ready" onClick={openSignupFormModal}>Ready to Battle?</div>
            </main>
            <footer>
                <div className="copyright">
                    <p>(c) BattleFit</p>
                </div>
                <div className="about-links">
                    <a href='https://github.com/bobaguardian/'>Github</a>
                    <p>Vivian Thach</p>
                    <a href='https://www.linkedin.com/in/vivianthach1023/'>LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}

export default SplashPage;
