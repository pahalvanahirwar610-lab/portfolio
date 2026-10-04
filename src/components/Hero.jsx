import TypingText from "./TypingText";
import "./Hero.css";
import profilePic from "../assets/profile_pic.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="outer">
      <div className="hero">
         <img src={profilePic} alt="My Profile" className="profile-pic" />
         <h1>Hi, I'm Pahalvan</h1>
         <TypingText fullText="Process Consultant Level 3 & Aspiring Developer" />
         <Link to="/about">
                <button>Explore My Work</button>
         </Link>
         
       </div>
    </div>
  );
}

export default Hero;
