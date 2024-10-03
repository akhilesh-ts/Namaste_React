import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineRoundaboutRight} from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
export const NavData = [
  {
    id: 1,
    name: "Home",
    icon:<IoHomeSharp/>,
    path:'/',
    
  },
  {
    id: 2,
    name: "About",
    icon:<MdOutlineRoundaboutRight/>,
    path:'/about',
   
  },
  {
    id: 3,
    name: "Contact",
    icon:<IoIosContact/>,
    path:'/contact',
  },
  {
    id: 4,
    name: "Carrers",
    icon:<FaPaperPlane/>,
    path:'/carrer',
  },
];
