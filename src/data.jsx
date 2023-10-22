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
    courseList: ['Computer Science in The 21st Century', 'AP Computer Science', 'Mobile App Development'],
  },
  {
    id: nanoid(),
    title: 'CSharp',
    icon: <SiCsharp className='h-16 w-16 text-emerald-500' />,
    courseList: ['Virtual Reality & Game Design'],
  },
  {
    id: nanoid(),
    title: 'Unity',
    icon: <UnityIcon />,
    courseList: ['Virtual Reality & Game Design'],
  },
  {
    id: nanoid(),
    title: 'C++',
    // icon: <SiCplusplus className='h-16 w-16 text-emerald-500' />,
    icon: <Cplusplus />,
    courseList: ['Data Structure'],
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
];

export const codingProjects = [
  {
    id: nanoid(),
    img: "src/assets/this-project.jpg",
    vedio: "",
    title: "This Website - My Portfolio",
    url: "#",
    github: "https://github.com/codey19/codey19.github.io",    
    tech: " Javascript & React",
    text: "This is a learning project in Udemy on web-frontend development.",
  },
  {
    id: nanoid(),
    img: "",
    // vedio: "src/assets/survival-of-the-fittest.mp4",
    vedio: "https://www.youtube.com/watch?v=IGN6bssnb-k",
    title: "Survival of the Fittest",
    url: "",
    github: "https://github.com/codey19/balls",    
    tech: "C++ & Rayplayer",
    text: "This is a course project of <Data Structure>.",
  },
  {
    id: nanoid(),
    img: "src/assets/BallsUnityWebgl.jpg",
    vedio: "", 
    title: "Balls",
    url: "http://cqs-unity-balls.servegame.org/",
    github: "https://github.com/codey19/balls",    
    tech: "Unity with C# & WebGl build",
    text: "This a course project of <Virtual Reality & Game Design>.",
  },
  {
    id: nanoid(),
    img: "src/assets/CannonUnityWebgl.jpg",
    vedio: "", 
    title: "Cannon",
    url: "http://cqs-unity-cannon.servegame.org/",
    github: "https://github.com/codey19/cannon",    
    tech: "Unity with C# & WebGl build",
    text: "This a course project of <Virtual Reality & Game Design>.",
  },
  {
    id: nanoid(),
    img: "src/assets/GravityGuyUnityWebgl.jpg",
    vedio: "", 
    title: "Gravity Guy",
    url: "http://cqs-unity-gravity.servegame.org/",
    github: "https://github.com/codey19/gravity",    
    tech: "Unity with C# & WebGl build",
    text: "This a course project of <Virtual Reality & Game Design>.",
  },
  {
    id: nanoid(),
    img: "src/assets/GyroUnityWebgl.jpg",
    vedio: "", 
    title: "Gyro",
    url: "http://cqs-unity-gyro.servegame.org/",
    github: "https://github.com/codey19/gyro",    
    tech: "Unity with C# & WebGl build",
    text: "This a course project of <Virtual Reality & Game Design>.",
  },
  {
    id: nanoid(),
    img: "src/assets/Mac2dUnityWebgl.jpg",
    vedio: "", 
    title: "Mac2D",
    url: "http://cqs-unity-mac2d.servegame.org/",
    github: "https://github.com/codey19/mac2d",    
    tech: "Unity with C# & WebGl build",
    text: "This a course project of <Virtual Reality & Game Design>.",
  },
  {
    id: nanoid(),
    img: "src/assets/FlappyBird.jpg",
    vedio: "", 
    title: 'Flappy Bird',
    url: 'http://flappy-bird-race-gs.servegame.org/',
    github: "https://github.com/codey19/flappybird",
    tech: "Javascript & phaser 3",
    text: 'This is a Udemy learning project.'
  }
];

export const cookingProjects = [
  {
    id: nanoid(),
    img: "https://www.seriouseats.com/thmb/9xlGr_x7-SXqYSWWnov68rr1kVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__02__20170217-reverse-sear-steak-02-d86b7f4676d240c196acf6903523c99f.jpg",
    vedio: "", 
    title: 'Reverse-Seared Steak',
    url: 'https://www.seriouseats.com/reverse-seared-steak-recipe/',
    github: "",
    text: "Season a roast or a thick-cut steak, arrange the meat on a wire rack set in a rimmed baking sheet, and place it in a low oven—between 200 and 275°F. Cook it until it's about 10 to 15°F below your desired serving temperature, then take it out and sear it in a ripping-hot skillet.",
  },
  {
    id: nanoid(),
    // img:  "src/assets/Stir-Fried-He-Fen.jpg",
    img: "https://redhousespice.com/wp-content/uploads/2019/08/Beef-chow-fun-by-Red-House-Spice-3.jpg",
    vedio: "", 
    title: 'Stir Fried Flat Rice Noodle',
    url: 'https://redhousespice.com/beef-chow-fun/',
    github: "",
    text: "Quickly fry the beef in oil. Transfer out as soon as it turns pale. In the remaining oil, stir fry sa-ho fun using a pair of chopsticks. Add in beansprouts & onion slices. Cook them for a short period of time to retain their crispiness. Finally stir in the beef, Chinese chive and the seasoning. Dish out as soon as everything is evenly coated with the sauce.",
  }
];

export const favoriteGames = [
  {
    id: nanoid(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iuap2W8WNiSILEpXqyjuDq4nHKO3waw3e3vK3tyv5jxxyYRCci_Fitvyh4KnHL88zvU&usqp=CAU',
    vedio: "", 
    title: 'Stick Empire War II',
    url: 'https://www.gameflare.com/online-game/stick-war-ii-order-empire/',
    github: "",
    text: "Get some gold, use your skills and defeat your enemies. Use your soldier to make sure you win. This game is mostly about tactics. You can train new soldiers and create a really strong line of defense. Make sure your enemy can't control your territory!",
  }
];