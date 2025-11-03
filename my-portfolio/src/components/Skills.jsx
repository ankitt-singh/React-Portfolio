import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["React", "Java", "Node.js", "MongoDB", "Firebase", "AI/ML", "HTML", "CSS", "JavaScript"];
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
