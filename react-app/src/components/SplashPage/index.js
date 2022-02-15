import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
import "./SplashPage.css";

const SplashPage = () => {
    return (
        <div>
            <nav>
                <LoginFormModal />
                <SignUpFormModal />
            </nav>
            <div>
                Welcome to BattleFit!
            </div>
        </div>
    )
}

export default SplashPage;
