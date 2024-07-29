import React from "react";
import "./wieAbout.style.css";
import WIE from "../../assets/wie-imgs/WIE.jpg";
const WieAbout = () => {
    return (
        <div className="WieAbout">
            <h2 className="vim">WOMEN IN ENGINEERING</h2>
            <hr/>
            <div className="WieAboutContent">
                <div className="WieAboutPhoto">
                    <img src={WIE} alt="Wie About Photo" />
                </div>
                <div className="WieAboutText">
                    <p>
                        The Women in Engineering (WIE) Affinity Group at IEEE SB JIIT is
                        dedicated to promoting the involvement and success of women in
                        engineering and technology. Through our various initiatives, events,
                        and programs, we aim to encourage professional growth, networking,
                        and collaboration among women engineers. By fostering a supportive
                        community, WIE at IEEE SB JIIT envisions a future where women and
                        men collaborate to drive technological innovation for societal
                        benefit.
                    </p>
                    <ul>
                        <li>
                            Provide assistance with the formation of new IEEE WIE Affinity
                            Groups and support ongoing activities.
                        </li>
                        <li>
                            Promote member grade advancement for women to the IEEE membership
                            grades of Senior Member and Fellow.
                        </li>
                        <li>
                            Advocate women in leadership roles in IEEE governance and career
                            advancement for women in the profession.
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="wie-events">WIE Events</h3>
        </div>
    );
};

export default WieAbout;