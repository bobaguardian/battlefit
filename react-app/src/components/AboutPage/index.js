import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div>
            <Link to="/"><h2 id="about-back"><i className="fa-solid fa-arrow-left"></i> Back to BattleFit</h2></Link>
            <div className="about-page-container">
                <h1>Meet the Creator of BattleFit</h1>
                <div id="image-bio">
                    <img src="https://battle-fit.s3.amazonaws.com/a65e56a842694feab3a069535db3fe6f.jpg"
                        alt="vivian-thach"></img>
                    <div id="bio-description">
                        <p>Hey! I'm Vivian, thanks for checking out BattleFit!</p>
                        <p>I'm a passionate software developer who loves seeing my imaginations come to life.
                            I like to take the things I enjoy from my hobbies and explore it more with coding!
                            To me, the greatest pleasure in software development is being able to evolve a thought into a full fledged product that would make an impact to the world.</p>
                        <p>
                            If you love BattleFit, check out my other projects! <a href="https://github.com/bobaguardian/"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/vivianthach1023/"><i className="fa-brands fa-linkedin"></i></a>
                        </p>

                        <div id="project-links">

                            <p>
                                <a href="https://split-a-bill.herokuapp.com/">SplitaBill</a>
                            </p>
                            <p>

                                <a href="https://goodmango.herokuapp.com/">GoodMango</a>
                            </p>
                            <p>

                                <a href="https://tabletopquest.herokuapp.com/">Tabletop Quest</a>
                            </p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
