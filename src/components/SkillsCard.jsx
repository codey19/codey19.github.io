const SkillsCard = ({ icon, title, courseList }) => {
    return (
      <article>
        <span>{icon}</span>
        <h4 className='mt-6 font-bold'>{title}</h4>
        <ul className='mt-2 text-slate-500'>
          { courseList.map(course => { return <li key={course}> {course} </li>; })}
        </ul>
      </article>
    );
  };
  export default SkillsCard;