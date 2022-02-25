import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <p><i className="fa-solid fa-copyright"></i> BattleFit</p>
            </div>
            <div className="technologies">
                <p>Python / Flask / PostgreSQL / SQLAlchemy / JavaScript / React / Redux / AWS S3</p>
            </div>
            <div className="about-links">
                <a href='https://github.com/bobaguardian/'><i className="fa-brands fa-github"></i></a>
                <a href='/meet-the-maker'>Vivian Thach</a>
                <a href='https://www.linkedin.com/in/vivianthach1023/'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;
