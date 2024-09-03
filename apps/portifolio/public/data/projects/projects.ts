import { IProject } from "@/interface/IProject";
import { tripperVisualization } from "./tripperVisualization";

export const projects: IProject[] = [
  {
    slug: "tripper",
    description: `An application for creating personalized travel 
    itineraries, developed using Swift and Go, with real-time navigation 
    and user reviews integration.`,
    name: "Tripper",
    techStack: ["Swift", "Go"],
    timeline: null,
    gitLink: "https://github.com/spktrm-io/tripper",
    members: ["Erick Barcelos"],
    projectVisualization: tripperVisualization,
    coverImage: "/images/projects/tripper/splashScreen.png",
    status: "working",
  },
  {
    slug: "alan-turing",
    description: ``,
    name: "Introduction To Computer Theory",
    techStack: ["Solid.js", "TypeScript", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/alan-turing",
    microRoute: "/alan-turing",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/alan-turing/alan-turing.png",
    status: "finished",
  },
  {
    slug: "lojinha-simples",
    description: ``,
    name: "Simple Little Store",
    techStack: ["React", "TypeScript", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/lojinha-simples",
    microRoute: "/lojinha-simples",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/lojinha-simples/lojinha.png",
    status: "finished",
  },
  {
    slug: "dost",
    description: `Monorepo for dost clothing store, powered by Turborepo. 
    It includes a Node.js server, Next.js web client, and React Native mobile 
    app, all streamlined in a single codebase.`,
    name: "dost",
    techStack: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
    timeline: null,
    link: "https://dostproject.vercel.app/",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/dost/dostHome.png",
    status: "working",
  },
  {
    slug: "joystick",
    description: ``,
    name: "Joystick",
    techStack: ["React", "JavaScript", "MongoDB", "Node.js", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/joystick-client",
    members: ["Erick Barcelos"],
    microRoute: "/joystick",
    coverImage: "/images/projects/joystick/home.png",
    status: "finished",
  },
  {
    slug: "secret-santa",
    description: ``,
    name: "Secret Santa",
    techStack: ["React", "JavaScript", "MongoDB", "Node.js", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/secret-santa-client",
    members: ["Erick Barcelos"],
    microRoute: "/secret-santa",
    coverImage: "/images/projects/secret-santa/home.png",
    status: "finished",
  },
  {
    slug: "video-project-manage",
    description: ``,
    name: "Video Project Manage",
    techStack: ["React", "JavaScript", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/video-project-manage",
    members: ["Erick Barcelos"],
    microRoute: "/video-project-manage",
    coverImage: "/images/projects/video-project-manage/home.png",
    status: "finished",
  },
  {
    slug: "electoral-system",
    description: ``,
    name: "Electoral System",
    techStack: ["Solid.js", "JavaScript", "MongoDB", "Node.js", "Webpack"],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/electoral-system-client",
    members: ["Erick Barcelos"],
    microRoute: "/electoral-system",
    coverImage: "/images/projects/electoral-system/home.png",
    status: "finished",
  },
  {
    slug: "rgbwallet",
    description: ``,
    name: "RGBWallet",
    techStack: [
      "React",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Webpack",
      "Webpack",
    ],
    timeline: null,
    gitLink:
      "https://github.com/brcls/portifolio-monorepo/tree/main/apps/rgbwallet",
    members: ["Erick Barcelos"],
    microRoute: "/rgbwallet",
    coverImage: "/images/projects/rgbwallet/home.png",
    status: "finished",
  },
  {
    slug: "guit",
    description: `GUI tool to facilitate GitFlow with support for conventional commits, built with Rust.`,
    name: "guit",
    techStack: ["Rust"],
    timeline: null,
    gitLink: "https://github.com/spktrm-io/guit",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/guit/home.png",
    status: "working",
  },
  {
    slug: "barter",
    description: `A gamified bartering application where users can trade goods
     and services, customize avatars, earn rewards, and engage with the 
     community. Developed with Flutter, Deno and Go.`,
    name: "barter",
    techStack: ["Flutter", "Deno", "Go"],
    timeline: null,
    gitLink: "https://github.com/spktrm-io/barter",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/barter/home.png",
    status: "designing",
  },
  {
    slug: "spktrm",
    description: `spktrm institutional website made in Svelte and Bun`,
    name: "spktrm",
    techStack: ["Svelte", "Bun"],
    timeline: null,
    gitLink: "https://github.com/spktrm-io/spktrm",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/spktrm/home.png",
    status: "designing",
  },
  {
    slug: "souvenir",
    description: `ML-powered photo app with advanced editing and organization features, built with Swift and Python.`,
    name: "souvenir",
    techStack: ["Swift", "Python"],
    timeline: null,
    gitLink: "https://github.com/spktrm-io/souvenir",
    members: ["Erick Barcelos"],
    coverImage: "/images/projects/souvenir/home.png",
    status: "designing",
  },
];
