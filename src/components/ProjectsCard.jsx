import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import ReactPlayer from 'react-player';

const ProjectsCard = ({ url, img, vedio, github, title, tech, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      { vedio && 
        <ReactPlayer 
          url={vedio} 
          width="380px"
          height="200px"
          loop="false"
          playing="true"
        />
      }
      { img && 
        <a href={url}>
          <img
            src={img}
            alt={title}
            className='w-full object-cover rounded-t-lg h-64'
          />
        </a>
      }
      <div className='p-8'>
        <a href={url}>
          <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
          <p className='mt-4 text-slate-700 leading-loose'>{tech}</p>
          <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        </a>
        <div className='mt-4 flex gap-x-4'>
          { url && 
            <a href={url}> 
              <TbWorldWww text="asdf" className='h-8 w-8 text-slate-500 hover:text-black duration-300' /> 
            </a>
          }
          { github && 
            <a href={github}> 
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          }
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;