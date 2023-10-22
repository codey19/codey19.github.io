import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import { BackTopLink } from './BackTopLink';

const About = () => {
  return (
    <section className='bg-emerald-100 py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' className='bg-emerald-100' />
          <p className='text-slate-600 mt-8 leading-loose'>
           I'm a senior in South Brunswick High School. I like gaming, coding, and cooking :-)
          </p>
          <BackTopLink />          
        </article>
      </div>
      
    </section>
  );
};
export default About;