import "./Footer.css";
import react, { useState } from "react";

function Footer() {


    return (
        <div className="footer-container">
            <div className="profile-container">
                <div className="profile-container_avatar">
                    <img className="img-avatar" src="img/AvatarMaker.png" />
                    <p className="name">Hector Crespo</p>
                </div>
                <div className="profile-container_icons">
                    <a className="github-icon" href="https://github.com/crespohector" >
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <a className="project-url" href="https://github.com/crespohector/js-overflow">Project GitHub</a>
            </div>
        </div>
    );
}


export default Footer;
