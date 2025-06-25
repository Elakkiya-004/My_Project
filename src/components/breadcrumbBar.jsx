import { useEffect, useState } from 'react';

function BreadCrumbBar() {
  const [current, setCurrent] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "about", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY + 100 >= section.offsetTop) {
          setCurrent(id.charAt(0).toUpperCase() + id.slice(1));
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<></>
    // <div className="bg-light text-dark p-2 ps-4 mt-5" style={{ marginTop: '56px' }}>
    //   You are viewing: <strong>{current}</strong>
    // </div>
  );
}

export default BreadCrumbBar;
