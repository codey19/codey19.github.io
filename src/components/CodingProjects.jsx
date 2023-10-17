import ProjectsCard from './ProjectsCard';
import { codingProjects } from '../data';
import SectionTitle from './SectionTitle';

const CodingProjects = () => {
  return (
    <section className='py-20 align-element bg-emerald-50' id='projects'>
      <SectionTitle text='Fun Coding Projects' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {codingProjects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default CodingProjects;