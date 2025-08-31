import './experience.css'
function Experience() {
  return (
    <section id="experience" className="experience-section p-5" style={{ minHeight: '100vh' }}>
  <div className="experience-header">
    <span className="experience-label">Experience</span>
    <h2 className="experience-title">Work Experience</h2>
  </div>

  <div className="experience-timeline">

    {/* Experience Item */}
    <div className="experience-item">
      <div className="experience-date">March 2021 - March 2023</div>
      <h3 className="experience-role">Software Developer - MinZharge, Salem</h3>
      <ul className="experience-details">
        <li>Proficient in HTML, CSS and JavaScript for building responsive and visually appealing web applications.</li>
        <li>Experienced in utilizing modern front-end frameworks such as React.js to create dynamic user interfaces.</li>
        <li>Capable of optimizing web performance by minimizing load times and improving site responsiveness.</li>
        <li>Knowledgeable in cross-browser compatibility and responsive design principles.</li>
        <li>Collaborated with back-end developers to integrate front-end components with back-end systems.</li>
      </ul>
    </div>

    <div className="experience-item">
      <div className="experience-date">July 2019 – February 2020</div>
      <h3 className="experience-role">Web Developer Intern (Full-time) - ThinkTac, Bangalore</h3>
      <ul className="experience-details">
        <li>Assisted in the development and maintenance of web applications using HTML, CSS and JavaScript.</li>
        <li>Worked on front-end frameworks like Bootstrap and jQuery.</li>
        <li>Gained hands-on experience in version control tools like Git and Bitbucket.</li>
        <li>Collaborated with a team to improve UI/UX and optimize performance.</li>
      </ul>
    </div>

</div>

    </section>
  );
}

export default Experience;
