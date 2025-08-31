import { useState, useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman, SiSequelize, SiJquery } from "react-icons/si";

// Icons
const icons = {
  HTML: <FaHtml5 color="#E34F26" />,
  CSS: <FaCss3Alt color="#1572B6" />,
  Javascript: <FaJsSquare color="#F7DF1E" />,
  React: <FaReact color="#61DAFB" />,
  jQuery: <SiJquery color="#0769AD" />,
  "Tailwind CSS": <SiTailwindcss color="#38B2AC" />,
  Bootstrap: <SiBootstrap color="#7952B3" />,
  Node: <FaNodeJs color="#339933" />,
  Express: <SiExpress color="white" />,
  MongoDB: <SiMongodb color="#47A248" />,
  MySql: <SiMysql color="#4479A1" />,
  Sequlise: <SiSequelize color="#52B0E7" />,
  Git: <FaGitAlt color="#F05032" />,
  Github: <FaGithub color="#FFFFFF" />,
  VScode: <VscVscode color="#007ACC" />,
  Postman: <SiPostman color="#FF6C37" />,
};

// Skill fill percentages
const skillPercent = {
  HTML: 95,
  CSS: 95,
  Javascript: 90,
  React: 80,
  jQuery: 80,
  "Tailwind CSS": 80,
  Bootstrap: 80,
  Node: 85,
  Express: 85,
  MongoDB: 85,
  MySql: 50,
  Sequlise: 80,
  Git: 90,
  Github: 85,
  VScode: 90,
  Postman: 80,
};

export default function SkillsTabs({ skillsData }) {
  const [activeTab, setActiveTab] = useState("All");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const tabsRef = useRef(null);
  const tabKeys = ["All", ...Object.keys(skillsData).filter((key) => key !== "All")];

  // Update arrow visibility based on scroll
  const checkArrows = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkArrows();
    if (tabsRef.current) tabsRef.current.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", checkArrows);

    return () => {
      if (tabsRef.current) tabsRef.current.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, []);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="skills-tabs">
      {/* Tabs with arrows */}
      <div className="tabs-container" style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {showLeft && (
          <button className="scroll-btn left" onClick={() => scrollTabs("left")} style={{ position: "absolute", left: 0, zIndex: 1 }}>
            <FaChevronLeft />
          </button>
        )}
        <div
          className="tabs"
          ref={tabsRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            padding: "10px 0",
            gap: "10px",
            scrollbarWidth: "none",
          }}
        >
          {tabKeys.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
             
            >
              {tab}
            </button>
          ))}
        </div>
        {showRight && (
          <button className="scroll-btn right" onClick={() => scrollTabs("right")} style={{ position: "absolute", right: 0, zIndex: 1 }}>
            <FaChevronRight />
          </button>
        )}
      </div>

      {/* Skills Panel */}
      <div className="skills-panel" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "20px" }}>
        {skillsData[activeTab].map((skill) => (
          <div
            className="skill-btn"
            key={skill}
            style={{
              "--fill": `${skillPercent[skill] || 0}%`,
            
            }}
          >
            <span className="skill-icon">{icons[skill]}</span>
            <span className="skill-text">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
