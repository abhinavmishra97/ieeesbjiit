import React from "react";
import './title.style.css';
import ReactPlayer from "react-player";
// import logoTr from '../../assets/logo_tr.webm';
import logoTr from '../../assets/logo_tr - CROP.webm';

const Title = () => {
    return (
        <div className="content-container">
            <div className="title-container">
                <div className="logo">
                    <div className="text-container">
                        <div className="ieee-container">
                            <p className="ieee">IEEE</p>
                            <ReactPlayer url={logoTr}
                                className="logo-video"
                                width="120px"
                                height="auto"
                                playing={true}
                                loop={true}
                                muted={true} />

                        </div>
                        <p className="sb-ieee">STUDENT BRANCH JIIT</p>
                    </div>
                </div>
                <p className="title">Advancing Technology for Humanity</p>
            </div>
        </div>
    )
}

export default Title;
