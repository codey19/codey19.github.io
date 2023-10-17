import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CodingProjects from './components/CodingProjects';
import CookingProjects from './components/CookingProjects';
import GamingProjects from './components/GamingProjects';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <CodingProjects />
      <CookingProjects />
      <GamingProjects />
    </>
  );
};
export default App;
