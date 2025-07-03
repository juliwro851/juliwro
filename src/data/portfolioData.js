import project1_1 from './images/project1-1.gif';
import project1_2 from './images/project1-2.gif';
import project1_3 from './images/project1-3.gif';
import project2_1 from './images/project2-1.gif';
import project2_2 from './images/project2-2.png';
import project2_3 from './images/project2-3.png';
import project3_1 from './images/project3-1.gif';
import project3_2 from './images/project3-2.png';
import project3_3 from './images/project3-3.png';

const portfolioProjects = [
  {
    title: "KnotFun",
    date: "2025",
    description: (
      <>
        Creating a game for a gamejam with <strong>Card based UI</strong>, Rouguelike with players connected with a rope.
      </>
    ),
    images: [project1_1, project1_2, project1_3],
    link: "https://example.com/project1"
  },
  {
    title: "Charnobyl Again",
    date: "2024",
    description: "Vimagineo 2023 - 2024 Programmer for  VR  (Unreal Engine)Tasks included designing and programming  gameplay elements in UE4 and UE5.Worked on Chernobyl Again and other projects.",
    images: [project2_1, project2_2, project2_3    ],
  },
  {
    title: "Paper Blades",
    date: "2023",
    description: "Dynamic roguelike in which you command a team of origami samurai fighting for their paper homes against the sinister Inkies. Explore mysterious islands, upgrade your feudal crew, discover new skills and never give up - the gods are on your side! ",
    images: [project3_1, project3_2, project3_3 ],
  },
];

export default portfolioProjects;
