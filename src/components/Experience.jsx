import "./Experience.css";  // styling ke liye

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <h3>Process Consultant – Healthcare Operations</h3>
        <p>Sagility Ltd | 1 year 1 month</p>
        <p>Worked on healthcare operations processes, improving efficiency and accuracy.</p>
      </div>
       <div className="experience-card">
        <h3>Internship – Web Development</h3>
        <p>Saiket System | 1 month</p>
        <p>Built small React components, learned Django basics, and contributed to internal tools.</p>
      </div>
    </section>
  );
}

export default Experience;
