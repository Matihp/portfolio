import { FaGithub ,FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

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
    link:'https://www.google.com',
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

export const icons = [<FaHtml5 />, <FaCss3 />,<FaNodeJs />, <DiJavascript />, <SiTypescript />, <FaReact />,  <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "about.com"
  },
  {
    id: 2,
    year: "2020",
    position: "Junior Web Developer",
    company: "quetal.com"
  },
  {
    id: 3,
    year: "2018",
    position: "Freelancer",
    company: "hola.com"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
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

