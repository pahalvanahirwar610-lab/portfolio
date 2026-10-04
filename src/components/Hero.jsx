<<<<<<< HEAD
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
=======
import profilePic from "../assets/profile_pic.jpeg"
import "./Hero.css";
function Hero(){
        return(
            <section id="hero">
            <img src={profilePic} alt="Pahalva Ahirwar" className="profile-img" />
            <h1>Hi, I’m Pahalvan Ahirwar — aspiring software developer</h1>
            <p>I build web apps with React & Django, and I’m learning AI tools.</p>
            <button onClick={()=>document.getElementById("projects").scrollIntoView()}>View Projects</button>
            </section>
        );
    }
export default Hero;
>>>>>>> b3d9d91e4301b01ad4ad4a2f558c3ed61097873a
