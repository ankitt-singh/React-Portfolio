import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "CodeCracker AI", desc: "AI that explains coding problems and debugging." },
    { title: "Smart Billing App", desc: "QR-based billing and inventory management tool." },
    { title: "Disaster Detection", desc: "Drone-based rescue detection system using AI." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
