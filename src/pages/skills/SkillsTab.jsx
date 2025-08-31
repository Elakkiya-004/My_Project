import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman, SiSequelize, SiJquery } from "react-icons/si";

// Icons
const icons = {
  html: <FaHtml5 color="#E34F26" />,
  css: <FaCss3Alt color="#1572B6" />,
  js: <FaJsSquare color="#F7DF1E" />,
  react: <FaReact color="#61DAFB" />,
  jQuery: <SiJquery color="#0769AD" />,
  "Tailwind CSS": <SiTailwindcss color="#38B2AC" />,
  Bootstrap: <SiBootstrap color="#7952B3" />,
  node: <FaNodeJs color="#339933" />,
  express: <SiExpress color="white" />,
  MongoDB: <SiMongodb color="#47A248" />,
  MySql: <SiMysql color="#4479A1" />,
  sequlise: <SiSequelize color="#52B0E7" />,
  Git: <FaGitAlt color="#F05032" />,
  Github: <FaGithub color="#FFFFFF" />,
  VScode: <VscVscode color="#007ACC" />,
  Postman: <SiPostman color="#FF6C37" />,
};

// Skill fill percentages
const skillPercent = {
  html: 50,
  css: 100,
  js: 50,
  react: 80,
  node: 70,
};

export default function SkillsTabs({ skillsData }) {
  const [activeTab, setActiveTab] = useState("All");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const tabsRef = useRef(null);
  const tabKeys = ["All", ...Object.keys(skillsData).filter((key) => key !== "All")];

  // Scroll buttons logic
  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 250;
      tabsRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  // Framer Motion variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="skills-tabs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      {/* Tabs with arrows */}
      <div className="tabs-container">
        {showLeft && <button className="scroll-btn left" onClick={() => scrollTabs("left")}><FaChevronLeft /></button>}
        <div className="tabs" ref={tabsRef}>
          {tabKeys.map((tab) => (
            <motion.button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
              variants={itemVariant}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        {showRight && <button className="scroll-btn right" onClick={() => scrollTabs("right")}><FaChevronRight /></button>}
      </div>

      {/* Skills Panel */}
      <motion.div className="skills-panel" variants={containerVariant}>
        {skillsData[activeTab].map((skill) => (
          <motion.div
            className="skill-btn"
            key={skill}
            style={{ "--fill": `${skillPercent[skill] || 0}%` }}
            variants={itemVariant}
          >
            <span className="skill-icon">{icons[skill]}</span>
            <span className="skill-text">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
