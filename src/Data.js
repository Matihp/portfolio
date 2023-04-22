import { FaGithub ,FaHtml5, FaCss3,FaJava, FaNodeJs, FaReact, FaSass,FaDatabase,FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import clinicaO from "./assets/ClinicaO.PNG";
import rick from "./assets/RickPage.PNG";
import socialMedia from "./assets/SocialMedia.PNG";
import dhBooking from "./assets/DhBooking.PNG";
import shoes from "./assets/shoes.PNG";
import wordle from "./assets/WordleGame.PNG";

export const navLinks = ["home", "sobre mi", "habilidades", "portfolio", "contacto"]

// export const socialIcons = [
//   <FaGithub /> ,
//   <FaLinkedin />,
//   <BsMedium />,
// ]
export const socialIcons=[
  {
    icon: <FaGithub />,
    link:'https://github.com/matihp',
  },
  {
    icon: <FaLinkedin />,
    link:'https://www.linkedin.com/in/matias-contreras-692953223/',
  },
  {
    icon: <BsMedium />,
    link:'https://medium.com/',
  }
]
export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Nombre",
    value: "Matias"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Celular",
    value: "+5463443566"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "matiasleoncontreras@gmail.com"
  }
]

export const icons = [
{
  i: <FaHtml5 />,
  name:'Html'
},
{
  i:<FaCss3 />,
  name:'Css'
},
{
  i:<FaSass />,
  name:'Sass'
},
{
  i:<FaNodeJs />,
  name:'NodeJs'
},
{
  i:<SiTypescript />,
  name:'Typescript'
},
{
  i:<FaReact />,
  name:'React'
},
{
  i:<FaJava/>,
  name:'Java'
},
{
  i:<FaDatabase />,
  name:'MySQL'
}
]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Certified Tech Developer",
    company: "Digital House"
  },
  {
    id: 2,
    year: "2023",
    position: "Freelancer",
    company: "Creación de paginas web"
  },
]
export const workImages = [
  {
    id: 1,
    img: clinicaO,
    name: "project 1",
    category: "React",
    tp:"Javascript",
    page:'https://soft-brioche-968db1.netlify.app/',
    github:'https://github.com/Matihp/ctd-esp-fe3-final',
  },
  {
    id: 2,
    img: rick,
    name: "project 2",
    category: "React",
    tp:'Typescript',
    page:'https://splendorous-semifreddo-52d381.netlify.app/',
    github:'https://github.com/Matihp/Proyecto_Typescript',
  },
  {
    id: 3,
    img: socialMedia,
    name: "project 3",
    category: "Next.js",
    tp:"React",
    page:'https://social-media-teal.vercel.app/',
    github:'https://github.com/Matihp/social-media',
  },
  {
    id: 4,
    img: dhBooking,
    name: "project 4",
    category: "React",
    tp:"Javascript",
    page:'https://github.com/Matihp/DH-Booking',
    github:'https://github.com/Matihp/DH-Booking',
  },
  {
    id: 5,
    img: shoes,
    name: "project 5",
    category: "",
    tp:"Javascript",
    page:'https://matihp.github.io/ecommerce-shoes-page/',
    github:'https://github.com/Matihp/ecommerce-shoes-page',
  },
  {
    id: 6,
    img: wordle,
    name: "project 6",
    category: "",
    tp:"Javascript",
    page:'https://matihp.github.io/Wordle-Game/',
    github:'https://github.com/Matihp/Wordle-Game',
  }
]


export const workNavs = [
  "Todo", "React", "Next.js","Typescript"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Rosario,Argentina"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "matiasleoncontreras@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+54-3462-645267"
  }
]

