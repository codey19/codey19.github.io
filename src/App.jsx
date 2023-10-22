import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { codingProjects, cookingProjects, favoriteGames } from './data';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects title="Fun Coding Projects" projects={codingProjects} background="bg-emerald-50" id="codingProjects"/>
      <Projects title="Favorite Recipe" projects={cookingProjects} background="bg-emerald-100" id="cookingProjects"/>      
      <Projects title="Favorite Games"projects={favoriteGames} background="bg-emerald-50" id="favoriteGames"/>
    </>
  );
};
export default App;
