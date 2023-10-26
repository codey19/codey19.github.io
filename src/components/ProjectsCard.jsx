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
        <a href={url} target="_blank">
          <img
            src={img}
            alt={title}
            className='w-full object-cover rounded-t-lg h-64'
          />
        </a>
      }
      <div className='p-8'>
        <a href={url} target='_blank'>
          <div className='mt-4 flex gap-x-4'>
            <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
          </div>
          <p className='mt-4 text-slate-700 leading-loose'>{tech}</p>
          <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        </a>
        <div className='mt-4 flex gap-x-4 text-emerald-500 hover:text-red-600 duration-100'>
          { url && 
                <a href={url} target='_blank'> 
                  <TbWorldWww className='h-8 w-8  hover:text-red-600 duration-100' />        
                </a> 
          }
          { url && <a href={url} target='_blank'><b>Click N'Play</b></a> }
        </div>
        <div className='mt-4 flex gap-x-4 text-emerald-500 hover:text-red-600 duration-100'>
          { github && 
            <a href={github} target='_blank'> 
              <FaGithubSquare className='h-8 w-8  hover:text-red-600 duration-100' />
            </a>
          }
          { github && <a href={github} target='_blank'><b>Checkout Code</b></a> }
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;