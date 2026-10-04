import "./About.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="container">

        {/* Back Button */}
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>⬅ Back</button>
        </div>

        {/* About Me Section */}
        <div className="card">
          <h3>About Me</h3>
          <p>
            Hi, I'm Pahalvan — Python Developer & Aspiring Data Scientist.
            I build web apps with React & Django and I’m strengthening my Python + Data Science skills
            to move into scalable projects.
          </p>
        </div>

        {/* Education Section */}
        <div className="card">
          <h3>Education</h3>
          <ul>
            <li>10th – Govt. High School Savramodi, Guna (MP Board, 2017-2018) – 83%</li>
            <li>12th – New Life Children H.S. School, Guna (MP Board, 2020-2021) – 83.6%</li>
            <li>B.Tech (CSE) – Technocrats Institute of Technology, Bhopal (RGPV, July 2025) – GPA 8.2</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="card">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Sagility Pvt. Ltd., Indore</strong> – Process Consultent 3 (Aug 2025 – Present)  
              <p>Reviewed incoming faxes, verified documents, placed orders, and maintained Excel-based intake records.</p>
            </li>
            <li>
              <strong>Saiket Systems</strong> – Web Development Intern (Jan–Feb 2026)  
              <p>Worked on diverse web projects, troubleshooting and optimizing code as part of a collaborative team.</p>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="card">
          <h3>My Skills</h3>
          <div className="skill"><span>C</span><div className="progress"><div className="bar" style={{"--progress":"80%"}} data-percent="80%"></div></div></div>
          <div className="skill"><span>Python</span><div className="progress"><div className="bar" style={{"--progress":"75%"}} data-percent="75%"></div></div></div>
          <div className="skill"><span>Django</span><div className="progress"><div className="bar" style={{"--progress":"60%"}} data-percent="60%"></div></div></div>
          <div className="skill"><span>React</span><div className="progress"><div className="bar" style={{"--progress":"70%"}} data-percent="70%"></div></div></div>
          <div className="skill"><span>HTML & CSS</span><div className="progress"><div className="bar" style={{"--progress":"80%"}} data-percent="80%"></div></div></div>
          <div className="skill"><span>JavaScript</span><div className="progress"><div className="bar" style={{"--progress":"70%"}} data-percent="70%"></div></div></div>
          <div className="skill"><span>SQL</span><div className="progress"><div className="bar" style={{"--progress":"50%"}} data-percent="50%"></div></div></div>
          <div className="skill"><span>Communication</span><div className="progress"><div className="bar" style={{"--progress":"70%"}} data-percent="70%"></div></div></div>
          <div className="skill"><span>Problem Solving & Teamwork</span><div className="progress"><div className="bar" style={{"--progress":"80%"}} data-percent="80%"></div></div></div>
        </div>

        {/* Certifications Section */}
        <div className="card">
          <h3>Certifications</h3>
          <ul>
            <li>🎓 <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS02S44890032730126556" target="_blank" rel="noopener noreferrer">NPTEL – Introduction to Programming in C</a></li>
            <li>🏆 <a href="https://www.codechef.com/certificates" target="_blank" rel="noopener noreferrer">CodeChef – C Programming</a></li>
            <li>📜 <a href="https://www.hackerrank.com/certificates/e95cdbb585f1" target="_blank" rel="noopener noreferrer">HackerRank – Python Certificate</a></li>
            <li>💻 <a href="https://premium.mysirg.com/learn/certificate/8765169-204121" target="_blank" rel="noopener noreferrer">Python Full Stack Development – MySirG.com</a></li>
          </ul>
        </div>

        {/* Projects Section with GitHub links */}
        <div className="card">
          <h3>My Projects</h3>
          <div className="project-card">
            <h4>Gym Landing Page</h4>
            <p>Responsive fitness website using HTML, CSS, JS.</p>
            <a href="https://github.com/pahalvanahirwar610-lab/Landing-page" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h4>Portfolio Website</h4>
            <p>Personal portfolio built with HTML & CSS.</p>
            <a href="https://github.com/pahalvanahirwar610-lab/internship-portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h4>Student Registration System</h4>
            <p>Django backend + JS frontend for academic management.</p>
            <a href="https://github.com/pahalvanahirwar610-lab/student-registration" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h4>Data Science Practice</h4>
            <p>Python notebooks exploring NumPy, Pandas, ML basics.</p>
            <a href="https://github.com/pahalvanahirwar610-lab/data-science-practice" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>

        {/* Contact Button at bottom of page */}
        <div className="contact-btn">
          <Link to="/contact">
            <button>Contact Me / Hire Me</button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default About;
