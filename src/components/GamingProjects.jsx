import ProjectsCard from './ProjectsCard';
import { favoriteGames } from '../data';
import SectionTitle from './SectionTitle';

const GamingProjects = () => {
  return (
    <section className='py-20 align-element bg-emerald-50' id='projects'>
      <SectionTitle text='Favorite Games' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {favoriteGames.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default GamingProjects;