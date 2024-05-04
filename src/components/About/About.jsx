import React from "react";
import "./About.css";
import about_img from "../../assets/images/about.png";
import play_icon from "../../assets/images/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Computer science lecture today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          eaque sint perferendis est nostrum voluptatibus dignissimos impedit
          sit! Doloribus a nobis debitis aut nulla architecto repellendus
          consectetur nesciunt, perspiciatis nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          repellendus nobis corrupti est mollitia enim aut earum quibusdam esse,
          commodi dolore voluptates assumenda neque rem tenetur quam. Qui ea
          nostrum aliquid quam aliquam obcaecati ex quibusdam asperiores labore
          possimus officiis pariatur voluptate dolores quisquam repellat amet,
          rerum debitis est eos!
        </p>
      </div>
    </div>
  );
};

export default About;
