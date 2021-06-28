import "./Footer.css";
import avatarImg from "../../images/AvatarMaker.png";

function Footer() {

    return (
        <footer className="footer-container">
            <div className="profile-container">
                <div className="block_img">
                    <img className="img-avatar" src={avatarImg} alt="avatar" />
                </div>
                <div className="profile-container_icons">
                    <span className="name">© Hector Crespo </span>
                    <a className="github-icon" href="https://github.com/crespohector/js-overflow" >
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="linkedin-icon" href="http://linkedin.com/in/hector-crespo-b0b5b019a" >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
