import {
  logo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postman,
  php,
  laravel,
  mysql,
  carrent,
  nfAcademy,
  kompas,
  BNSP,
  MSIB5,
  cloud_aws,
  js_basic,
  backend_basic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Laravel Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Head of Cinematography Division",
    company_name: "Komunitas Mahasiswa Pencinta Seni UNBAJA",
    icon: kompas,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Led the cinematography division in planning and executing creative multimedia projects.",
      "Collaborated with cross-functional student teams for event production and digital content creation.",
      "Managed visual production workflows, including video shooting and editing processes.",
      "Developed teamwork, leadership, and project coordination skills in a collaborative environment.",
    ],
  },
  {
    title: "Fullstack Web Developer Trainee",
    company_name: "PT Nurul Fikri Cipta Inovasi",
    icon: nfAcademy,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Developed responsive web applications using JavaScript, PHP, and Laravel.",
      "Built REST API integrations and implemented database management using MySQL/MariaDB.",
      "Collaborated on fullstack development projects during the Independent Study Program.",
      "Used Git and GitHub for version control and team collaboration.",
    ],
  },
];

const certificates = [
  {
    name: "Akademi Fullstack Web Developer",
    description:
      "Berhasil menyelesaikan Studi Independen Bersertifikat selama 5 bulan dengan predikat Sangat Baik, menguasai Tech Stack dari UI/UX hingga Laravel.",
    tags: [
      {
        name: "msib-5",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "green-text-gradient",
      },
    ],
    image: MSIB5,
  },
  {
    name: "Pengembang Web Pratama",
    description:
      "Sertifikasi Kompetensi BNSP dalam bidang Web Development, memvalidasi keahlian dalam implementasi UI dan pemrograman terstruktur.",
    tags: [
      {
        name: "bnsp",
        color: "red-text-gradient",
      },
      {
        name: "lsp-td",
        color: "orange-text-gradient",
      },
    ],
    image: BNSP,
  },
  {
    name: "Cloud Practitioner Essentials",
    description:
      "Memahami dasar-dasar AWS Cloud, termasuk infrastruktur global, layanan komputasi (EC2), penyimpanan, dan keamanan cloud.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "dicoding",
        color: "orange-text-gradient",
      },
    ],
    image: cloud_aws,
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    description:
      "Menguasai fundamental JavaScript, Object-Oriented Programming (OOP), serta konsep Concurrency dan pengujian kode.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "dicoding",
        color: "orange-text-gradient",
      },
    ],
    image: js_basic,
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    description:
      "Membangun web service menggunakan Node.js dan framework Hapi, serta mengimplementasikan RESTful API dengan Bookshelf API.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: backend_basic,
  },
];

const projects = [
  {
    name: "Lorem ipsum dolor",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, odio?",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certificates, projects };
