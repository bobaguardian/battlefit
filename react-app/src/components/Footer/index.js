import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = ({ className }) => {
    return (
        <footer className={`${className}`}>
            <div className="copyright">
                <p><i className="fa-solid fa-copyright"></i> BattleFit</p>
            </div>
            <div className="technologies">
                <p>Python / Flask / PostgreSQL / SQLAlchemy / JavaScript / React / Redux / AWS S3</p>
            </div>
            <div className="about-links">
                <a href='https://github.com/bobaguardian/'><i className="fa-brands fa-github"></i></a>
                <Link to='/meet-the-maker'>Vivian Thach</Link>
                <a href='https://www.linkedin.com/in/vivianthach1023/'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;
