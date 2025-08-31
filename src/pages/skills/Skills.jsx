import SkillsTabs from "./SkillsTab";
import "./Skills.css";

export default function Skills() {
  // Skills data
  const skillsData = {
    "Front-end": ["HTML", "CSS", "Javascript", "React", "jQuery", "Tailwind CSS", "Bootstrap"],
    "Back-end": ["Node", "Express"],
    "Database": ["MongoDB", "MySql", "Sequlise"],
    "Tools/Platform": ["Git", "Github", "VScode", "Postman"],
  };
  
  // Dynamically generate "All" tab
  skillsData["All"] = [...new Set(Object.values(skillsData).flat())];

  return (
    <section
      id="skills"
      className="skills-section p-5"
      style={{ minHeight: "100vh", scrollMarginTop: "80px" }}
    >
      <div className="skills-header">
        <p className="skills-label">Skills</p>
        <div className="skills-title">Tech Stack</div>
        <p>A list of all the skills and tech I'm familiar with</p>
      </div>

      {/* Pass skillsData as prop */}
      <SkillsTabs skillsData={skillsData} />
    </section>
  );
}
