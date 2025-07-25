import './Home.css';

function Home() {
  return (
  <section id="home" className="home-section">
  <div className="container home-container">
    {/* Left - Introduction */}
    <div className="intro-content">
      <p className="greeting">hello i'm</p>
      <h1 className="name-gradient">Elakkiya Sakthivelu</h1>
      <h4 className="role">React JS Developer & Full-Stack Web Developer</h4>
      <p className="about">Passionate about crafting interactive, efficient, and user-focused web applications with scalable backend systems.
        Skilled in building full-stack solutions using modern technologies like React, Node.js, and SQL/NoSQL databases.
        Dedicated to writing clean, maintainable code and continuously improving through learning and collaboration.
      </p>
    </div>

    {/* Right - VS Code-style block */}
    <div className="code-box">
      <div className="code-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="filename">developer.js</span>
      </div>
      <pre className="code-content">
<code>
{`// Software Engineer
const developer = {
  name: 'Elakkiya Sakthivelu',
  skills: ['React', 'Node.js', 'MongoDB'],
  focuses: ['Full-Stack', 'UI/UX'],
  learning: 'Always'
};`}
</code>
      </pre>
    </div>
  </div>
</section>

  );
}

export default Home;
