import Navbar from './components/Navbar';
import BreadCrumbBar from './components/breadcrumbBar';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import About from './pages/about-me/AboutMe';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* <BreadCrumbBar /> */}
      <Home />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
