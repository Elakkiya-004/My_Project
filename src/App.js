import Navbar from './components/Navbar';
import BreadCrumbBar from './components/breadcrumbBar';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';
import '@fontsource/inter'; // Default weight 400

function App() {
  return (
    <>
      <Navbar />
      {/* <BreadCrumbBar /> */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}

export default App;
