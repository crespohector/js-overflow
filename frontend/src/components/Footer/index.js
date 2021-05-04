import "./Footer.css";

function Footer() {


    return (
        <div className="footer-container">
            <div className="profile-container">
                <div className="profile-container_avatar">
                    <img className="img-avatar" src="img/AvatarMaker.png" alt="avatar" />
                    <p className="name">Hector Crespo</p>
                </div>
                <div className="profile-container_icons">
                    <a className="github-icon" href="https://github.com/crespohector/js-overflow" >
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="linkedin-icon" href="http://linkedin.com/in/hector-crespo-b0b5b019a" >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Footer;
