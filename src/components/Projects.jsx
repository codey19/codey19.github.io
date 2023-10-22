import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';
import { BackTopLink } from './BackTopLink';

const Projects = ({title, projects, background, id}) => {
  const classname = 'py-20 align-element ' + background;
  return (
    <section className={classname} id={id}>
      <SectionTitle text={title} />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        { projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      <BackTopLink />          
    </section>
  );
};
export default Projects;