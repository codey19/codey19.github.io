import ProjectsCard from './ProjectsCard';
import { cookingProjects } from '../data';
import SectionTitle from './SectionTitle';

const CookingProjects = () => {
  return (
    <section className='py-20 align-element bg-emerald-100' id='projects'>
      <SectionTitle text='Favorite Recepies' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {cookingProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default CookingProjects;