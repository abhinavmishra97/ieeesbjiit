import React from "react";
import "./team.style.css";

import Typewriter from "typewriter-effect";

const Team = ({ members }) => {
  return (
    <div className="team-component">
      <h1>
        {/* <Typewriter
          options={{
            strings: ["MEET THE TEAM"],
            autoStart: true,
            loop: true,
          }} /> */}
        MEET THE TEAM
      </h1>

      <hr />

      <ul className="honeycomb">
        {members.map((member, index) => (
            <li className="honeycomb-cell">
              <img
                src={member.image}
                alt={member.name}
                className="honeycomb-cell_img"
              />
              <div className="honeycomb-cell_title">{member.post}</div>
            </li>
        ))}
        <li className="honeycomb-cell honeycomb_Hidden">
        </li>
      </ul>
    </div>
  );
};

export default Team;
