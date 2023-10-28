import heroImg from '../assets/hero.svg';
import overlayHeroImg from '../assets/Hero-overlay.jpg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-white-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            H<span className='text-red-500'>i</span>, I'm C<span className='text-red-500'>o</span>d<span className='text-red-500'>e</span>y
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Senior<span className='font-bold text-green-600'>@</span>South Brunswick High, NJ
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Proudly Enrolled in <span className='font-bold'>The Computer Science Academy</span>
          </p>
          <div className='mt-4 flex gap-x-4 text-emerald-500 hover:text-red-600 duration-100'>
            <a href="https://github.com/codey19?tab=repositories" target='_blank'> 
              <FaGithubSquare className='h-8 w-8  hover:text-red-600 duration-100' />
            </a>
            <a href="https://github.com/codey19?tab=repositories" target='_blank'><b>Code in Github</b></a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={overlayHeroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;