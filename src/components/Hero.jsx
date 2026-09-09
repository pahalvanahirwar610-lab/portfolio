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