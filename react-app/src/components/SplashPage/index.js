import ImageGallery from 'react-image-gallery';
import LoginFormModal from "../auth/LoginFormModal";
import SignUpFormModal from "../auth/SignupFormModal";
import Footer from "../Footer";
import "./SplashPage.css";


const images = [
    {
        original: "https://battle-fit.s3.amazonaws.com/c9944a276ef5454293dc3a0999f61a3f.jpg",
        thumbnail: "https://battle-fit.s3.amazonaws.com/c9944a276ef5454293dc3a0999f61a3f.jpg",
        originalClass:"carousel-image"
    },
    {
        original: "https://battle-fit.s3.amazonaws.com/52dca2a1dd3a4654a235bcef951f94d6.jpg",
        thumbnail: "https://battle-fit.s3.amazonaws.com/52dca2a1dd3a4654a235bcef951f94d6.jpg",
        originalClass:"carousel-image"
    },
    {
        original: "https://battle-fit.s3.amazonaws.com/47a293bc14684361819f08c675fe02bb.jpg",
        thumbnail: "https://battle-fit.s3.amazonaws.com/47a293bc14684361819f08c675fe02bb.jpg",
        originalClass:"carousel-image"
    },
    {
        original: "https://battle-fit.s3.amazonaws.com/c4bc270236e341128996e5715a99e837.jpg",
        thumbnail: "https://battle-fit.s3.amazonaws.com/c4bc270236e341128996e5715a99e837.jpg",
        originalClass:"carousel-image"
    },
    {
        original: "https://battle-fit.s3.amazonaws.com/cc9bdfeda5bd436a99845d5d066d760b.png",
        thumbnail: "https://battle-fit.s3.amazonaws.com/cc9bdfeda5bd436a99845d5d066d760b.png",
        originalClass:"carousel-image"
    },
]

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
                    <div className="carousel">
                        <ImageGallery
                            items={images}
                            showThumbnails={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            slideInterval={5000}
                            showNav={false}
                        />

                    </div>
                </div>
                <div id="splash-ready" onClick={openSignupFormModal}>Ready to Battle?</div>
            </main>
            <Footer />
        </div>
    )
}

export default SplashPage;
