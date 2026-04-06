import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "nita-food-machines",
    category: "E-commerce",
    title: "Nita Food Machines",
    src: "/assets/My Projects/nita-food-machines.png.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full Stack E-commerce Platform for Kitchen Appliances
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a full-stack e-commerce website and application for a
            kitchen appliances brand, enabling online product display and
            customer interaction.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Product catalog with detailed specifications</li>
            <li>Enquiry/quotation system for customer queries</li>
            <li>Responsive UI design for all devices</li>
            <li>Basic admin management panel</li>
            <li>Performance optimization and scalability</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
          <p className="font-mono mb-2">
            Managed the project end-to-end including UI/UX design, development,
            deployment, and performance optimization. Designed the frontend
            using modern web technologies and integrated backend services for
            data handling and scalability.
          </p>
        </div>
      );
    },
  },
  {
    id: "inventure",
    category: "Social Media Marketing Agency",
    title: "Inventure",
    src: "/assets/My Projects/inventure.png.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Digital Marketing Agency Website for Brand Growth Services
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a professional website for a social media marketing agency,
            allowing businesses to explore services, view campaign portfolios,
            and connect for marketing consultations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Service showcase for social media marketing solutions</li>
            <li>Portfolio section displaying previous marketing campaigns</li>
            <li>Client enquiry and consultation request system</li>
            <li>Responsive and modern UI for all devices</li>
            <li>Admin panel for managing services, leads, and portfolios</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
          <p className="font-mono mb-2">
            Handled the complete development lifecycle including design planning,
            frontend implementation, and backend integration. Focused on creating
            a clean and professional interface that highlights marketing services
            and simplifies client lead generation.
          </p>
        </div>
      );
    },
  },
  {
    id: "lothal",
    category: "Clothing Designer Studio",
    title: "Lothal",
    src: "/assets/My Projects/lothal.png.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full Stack Fashion Studio Website for Custom Clothing
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a modern website for a clothing designer studio, enabling
            customers to explore fashion collections, book consultations, and
            request custom clothing designs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Designer collections with detailed product showcases</li>
            <li>Custom clothing request and consultation booking system</li>
            <li>Fashion gallery for latest designs and seasonal collections</li>
            <li>Responsive UI for mobile, tablet, and desktop devices</li>
            <li>Basic admin panel for managing collections and client enquiries</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Development Process</TypographyH3>
          <p className="font-mono mb-2">
            Managed the project from concept to deployment including UI/UX design,
            frontend development, and backend integration. Implemented interactive
            galleries and enquiry management to enhance customer engagement and
            streamline communication with the designer studio.
          </p>
        </div>
      );
    },
  },
  {
    id: "alpine-institute",
    category: "Educational Platform",
    title: "Alpine Institute",
    src: "/assets/My Projects/alpine-institute.png.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Educational Consultancy E-commerce Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed and designed a full-stack e-commerce platform using React,
            Node.js, and MongoDB. This project provided hands-on experience in
            building a website from scratch, covering frontend, backend, and
            database fundamentals.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features Implemented</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Product listings and catalog management</li>
            <li>Shopping cart functionality</li>
            <li>User authentication system</li>
            <li>Responsive design for all devices</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Timeline</TypographyH3>
          <p className="font-mono mb-2">
            March 2024 - May 2025 | Comprehensive full-stack development
            experience.
          </p>
        </div>
      );
    },
  },
  {
    id: "crm-quotation-module",
    category: "CRM System",
    title: "CRM & Quotation Module",
    src: "/assets/My Projects/crm-quotation-module.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sponsored Industry Project – Gamerz Nation, Pune
          </TypographyP>
          <TypographyP className="font-mono ">
            Selected to develop a CRM and Quotation Management module for an
            internal desktop application. This was an 8-month development cycle
            project completed in collaboration with industrial and university
            mentors.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features Built</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Quotation generation system</li>
            <li>Client management module</li>
            <li>Inventory-based suggestion features</li>
            <li>Integration with existing systems</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Timeline</TypographyH3>
          <p className="font-mono mb-2">
            July 2025 - March 2026 | Collaborated with industrial and university
            mentors throughout the development process.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/My Projects/my-portfolio.png.png",
    screenshots: ["1.png"],
    live: "#",
    github: "https://github.com/Rushi-creator",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Interactive 3D elements rendered on the webpage, creating an
            immersive experience for visitors. The keyboard modal reveals skills
            in a creative and engaging way.
          </p>
          <TypographyH3 className="my-4 ">Modern Design</TypographyH3>
          <p className="font-mono mb-2">
            Dark theme with floating particles = out-of-this-world cool.
            Featuring smooth animations and responsive design.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
