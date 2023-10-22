import { nanoid } from 'nanoid';
import { FaJava, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si'; 

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
    title: 'CSharp & Unity',
    icon: <SiCsharp className='h-16 w-16 text-emerald-500' />,
    courseList: ['Virtual Reality & Game Design'],
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />,
    courseList: ['Computer Science in The 21st Century', 'AP Computer Science', 'Mobile App Development'],
  },
  {
    id: nanoid(),
    title: 'Javascript & Web & Phaser3',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    courseList: ['Hobby'],
  }
];

export const codingProjects = [
  {
    id: nanoid(),
    img: "src/assets/BallsUnityWebgl.jpg",
    title: "Balls",
    url: "http://cqs-unity-balls.servegame.org/",
    github: "https://github.com/codey19/balls",    
    tech: "Unity & C#, Visual Studio, build to WebGl",
    text: "",
  },
  {
    id: nanoid(),
    img: "src/assets/CannonUnityWebgl.jpg",
    title: "Cannon",
    url: "http://cqs-unity-cannon.servegame.org/",
    github: "https://github.com/codey19/cannon",    
    tech: "Unity & C#, Visual Studio, build to WebGl",
    text: "",
  },
  {
    id: nanoid(),
    img: "src/assets/GravityGuyUnityWebgl.jpg",
    title: "Gravity Guy",
    url: "http://cqs-unity-gravity.servegame.org/",
    github: "https://github.com/codey19/gravity",    
    tech: "Unity & C#, Visual Studio, build to WebGl",
    text: "",
  },
  {
    id: nanoid(),
    img: "src/assets/GyroUnityWebgl.jpg",
    title: "Gyro",
    url: "http://cqs-unity-gyro.servegame.org/",
    github: "https://github.com/codey19/gyro",    
    tech: "Unity & C#, Visual Studio, build to WebGl",
    text: "",
  },
  {
    id: nanoid(),
    img: "src/assets/Mac2dUnityWebgl.jpg",
    title: "Mac2D",
    url: "http://cqs-unity-mac2d.servegame.org/",
    github: "https://github.com/codey19/mac2d",    
    tech: "Unity & C#, Visual Studio, build to WebGl",
    text: "",
  },
  {
    id: nanoid(),
    img: "src/assets/FlappyBird.jpg",
    title: 'Flappy Bird',
    url: 'http://flappy-bird-race-gs.servegame.org/',
    github: "https://github.com/codey19/flappybird",
    text: 'This project is the learning course in Udemy.'
  }
];

export const cookingProjects = [
  {
    id: nanoid(),
    img: "https://www.seriouseats.com/thmb/9xlGr_x7-SXqYSWWnov68rr1kVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__02__20170217-reverse-sear-steak-02-d86b7f4676d240c196acf6903523c99f.jpg",
    title: 'Reverse-Seared Steak',
    url: 'https://www.seriouseats.com/reverse-seared-steak-recipe/',
    github: "",
    text: "Season a roast or a thick-cut steak, arrange the meat on a wire rack set in a rimmed baking sheet, and place it in a low oven—between 200 and 275°F. Cook it until it's about 10 to 15°F below your desired serving temperature, then take it out and sear it in a ripping-hot skillet.",
  },
  {
    id: nanoid(),
    // img:  "src/assets/Stir-Fried-He-Fen.jpg",
    img: "https://redhousespice.com/wp-content/uploads/2019/08/Beef-chow-fun-by-Red-House-Spice-3.jpg",
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
    title: 'Stick Empire War II',
    url: 'https://www.gameflare.com/online-game/stick-war-ii-order-empire/',
    github: "",
    text: "Get some gold, use your skills and defeat your enemies. Use your soldier to make sure you win. This game is mostly about tactics. You can train new soldiers and create a really strong line of defense. Make sure your enemy can't control your territory!",
  }
];