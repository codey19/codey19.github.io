import { nanoid } from 'nanoid';
import { FaJava, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si'; 
import { SiFlutter } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import PhaserIcon from './assets/PhaserIcon';
import UnityIcon from './assets/UnityIcon';
import Cplusplus from './assets/Cplusplus';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#codingProjects', text: 'Coding-Projects' },
  { id: nanoid(), href: '#cookingProjects', text: 'Favorite-Recipe' },
  { id: nanoid(), href: '#favoriteGames', text: 'Favorite-Games' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />,
    courseList: ['Computer Science in The 21st Century', 
                  'AP Computer Science A', 
                  'Mobile App Development', 
                  'Data Structures'],
  },
  {
    id: nanoid(),
    title: 'CSharp',
    icon: <SiCsharp className='h-16 w-16 text-emerald-500' />,
    courseList: ['Virtual Reality & Game Design', 
                  'Hobby'],
  },
  {
    id: nanoid(),
    title: 'Unity',
    icon: <UnityIcon />,
    courseList: ['Virtual Reality & Game Design', 
                  'Hobby'],
  },
  {
    id: nanoid(),
    title: 'C++',
    // icon: <SiCplusplus className='h-16 w-16 text-emerald-500' />,
    icon: <Cplusplus />,
    courseList: ['Computer Science Capstone'],
  },
  {
    id: nanoid(),
    title: 'Flutter',
    icon: <SiFlutter className='h-16 w-16 text-emerald-500' />,
    courseList: ['Computer Science Club'],
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    courseList: ['Hobby'],
  },
  {
    id: nanoid(),
    title: 'Phaser',
    icon: <PhaserIcon />, 
    courseList: ['Hobby'],
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />, 
    courseList: ['Hobby'],
  },
];

export const codingProjects = [
  {
    id: nanoid(),
    img: "assets/this-project.jpg",
    vedio: "",
    title: "This Website - My Portfolio",
    url: "#",
    github: "https://github.com/codey19/codey19.github.io",    
    tech: " Javascript & React & Tailwind CSS",
    text: "A hobby project from Udemy: web-frontend development using React.",
  },
  {
    id: nanoid(),
    img: "assets/Mac2dUnityWebgl.jpg",
    vedio: "", 
    title: "Mac2D",
    url: "http://cqs-unity-mac2d.servegame.org/",
    github: "https://github.com/codey19/mac2d",    
    tech: "Unity with C# & WebGl build",
    text: "A hobby project. Use key WASD and SPACE to navigate the 2D world to slay King Macbeth on top "
      + "of the castle. Move only when Macbeth is turned/when the \"Green Light\" sign appears. Move "
      + "outside that time window, get killed by Macbeth. Respawn with SPACE."
  },
  {
    id: nanoid(),
    img: "assets/FlappyBird.jpg",
    vedio: "", 
    title: 'Flappy Bird',
    url: 'http://cqs-flappyclone.servegame.org/',
    github: "https://github.com/codey19/flappybird",
    tech: "Javascript & phaser 3",
    text: "A hobby project from Udemy. Use SPACE key to make the bird (the purple squre) jump to avoid "
         + "obstacles. You score everytime you pass an obstacle. "
  },
  {
    id: nanoid(),
    img: "",
    vedio: "assets/autonomous_agent.mp4",
    // vedio: "https://www.youtube.com/watch?v=IGN6bssnb-k",
    title: "Autonomous Agent",
    url: "",
    github: "https://github.com/codey19/raylib-autoa-agent",    
    tech: "C++ & Raylib",
    text: "A school course project (Computer Science Capstone). This is an simulation of evolution. "
        + "After each 30 second period, the individual improves its traits or mutates if it's in the  "
        + " vicinity of a different type of individual.",
  },
  {
    id: nanoid(),
    img: "assets/BallsUnityWebgl.jpg",
    vedio: "", 
    title: "Balls",
    url: "http://cqs-unity-balls.servegame.org/",
    github: "https://github.com/codey19/balls",    
    tech: "Unity with C# & WebGl build",
    text: "A school course project (Virtual Reality & Game Design). Use key WASD to move " 
          + "the cloud to catch the falling rain drops to grow the cloud.",
  },
  {
    id: nanoid(),
    img: "assets/CannonUnityWebgl.jpg",
    vedio: "", 
    title: "Cannon",
    url: "http://cqs-unity-cannon.servegame.org/",
    github: "https://github.com/codey19/cannon",    
    tech: "Unity with C# & WebGl build",
    text: "A school course project (Virtual Reality & Game Design). Use use arrow key to move " 
        + "the cannon up and down and use SPACE key to fire the assortment of farm animals to knock "
        + "over the items on the plane.",
  },
  {
    id: nanoid(),
    img: "assets/GravityGuyUnityWebgl.jpg",
    vedio: "", 
    title: "Gravity Guy",
    url: "http://cqs-unity-gravity.servegame.org/",
    github: "https://github.com/codey19/gravity",    
    tech: "Unity with C# & WebGl build",
    text: "A school course project (Virtual Reality & Game Design). This is an infinite runner. Use key AD to " 
          + "move the ball left and right to avoid the obstacles. Use key SPACE to jump over the obstacles. "
          + "Use E to invert the gravity.",
  },
  {
    id: nanoid(),
    img: "assets/GyroUnityWebgl.jpg",
    vedio: "", 
    title: "Gyro",
    url: "http://cqs-unity-gyro.servegame.org/",
    github: "https://github.com/codey19/gyro",    
    tech: "Unity with C# & WebGl build",
    text: "A school course project (Virtual Reality & Game Design). Use key WASD to move the skeleton and attack "
          + "with mouse left click to defeat the dark knight.",
  },
  // {
  //   id: nanoid(),
  //   img: "assets/Mac2dUnityWebgl.jpg",
  //   vedio: "", 
  //   title: "Star Force",
  //   url: "http://cqs-unity-mac2d.servegame.org/",
  //   github: "https://github.com/codey19/mac2d",    
  //   tech: "Unity with C# & WebGl build",
  //   text: "A course project. Use arrow keys to move to left and right. Use SPACE key to shoot missles. "
  //         +  "Hit enemy spaceship to gain points. "
  // }, 
];

export const cookingProjects = [
  {
    id: nanoid(),
    img: "https://www.seriouseats.com/thmb/9xlGr_x7-SXqYSWWnov68rr1kVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__02__20170217-reverse-sear-steak-02-d86b7f4676d240c196acf6903523c99f.jpg",
    vedio: "", 
    title: 'Reverse-Seared Steak',
    url: 'https://www.seriouseats.com/reverse-seared-steak-recipe/',
    github: "",
    text: "Season a roast or a thick-cut steak, arrange the meat on a wire rack set in a rimmed baking sheet, "
        + "and place it in a low oven—between 200 and 275°F. Cook it until it's about 10 to 15°F below your "
        + "desired serving temperature, then take it out and sear it in a ripping-hot skillet.",
  },
  {
    id: nanoid(),
    // img:  "assets/Stir-Fried-He-Fen.jpg",
    img: "https://redhousespice.com/wp-content/uploads/2019/08/Beef-chow-fun-by-Red-House-Spice-3.jpg",
    vedio: "", 
    title: 'Stir Fried Flat Rice Noodle',
    url: 'https://redhousespice.com/beef-chow-fun/',
    github: "",
    text: "Quickly fry the beef in oil. Transfer out as soon as it turns pale. In the remaining oil, stir fry "
          + "sa-ho fun using a pair of chopsticks. Add in beansprouts & onion slices. Cook them for a short "
          + "period of time to retain their crispiness. Finally stir in the beef, Chinese chive and the "
          + "seasoning. Dish out as soon as everything is evenly coated with the sauce.",
  }
];

export const favoriteGames = [
  {
    id: nanoid(),
    img: 'https://i.ytimg.com/vi/uWsQ5IWVilM/maxresdefault.jpg',
    vedio: "", 
    title: 'Clash Royale',
    url: 'https://supercell.com/en/games/clashroyale/',
    github: "",
    text: "",
  }
];