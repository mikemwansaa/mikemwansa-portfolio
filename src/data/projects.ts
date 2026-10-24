import {publicImg} from '#utils/helpers'
import type {IProject} from '#utils/types'

const logo = (name: string) => [
  publicImg(`logos/${name}_sm.png`),
  publicImg(`logos/${name}.png`),
  publicImg(`logos/${name}@2x.png`),
]

const shots = (name: string, count: number) =>
  Array.from({length: count}, (_, i) => [
    publicImg(`projects/${name}-desktop-${i + 1}.jpg`),
    publicImg(`projects/${name}-desktop-${i + 1}@2x.jpg`),
  ])

// NOTE: `details` links point to GitHub repo placeholders — update them (or
// clear to '') once your repos are public. `url` is left blank until each
// project has a live deployment; fill it in and the "See it live" button
// will appear automatically.
const projects: IProject[] = [
  {
    name: 'zedshelf',
    color: 'grass',
    title: 'ZedShelf',
    textValues: ['Zambian Kwacha'],
    types: ['app', 'site'],
    companyName: 'independent',
    url: '',
    details: 'https://github.com/mikemwansaa/zedshelf', // TODO
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'React, TypeScript, Vite',
      {tKey: 'responsive', text: 'Tailwind CSS'},
      'Supabase, Cloudinary',
      {tKey: 'businessLogic', text: 'Realtime messaging, UNZA classifieds'},
      {tKey: 'august', text: 2026},
    ],
    images: {
      logo: logo('zedshelf'),
      desktop: shots('zedshelf', 3),
    },
  },
  {
    name: 'uniflow',
    color: 'blue',
    title: 'UniFlow',
    textValues: ['Akivara Technologies'],
    types: ['app'],
    companyName: 'akivara',
    details: '', // TODO: add case study / deck link
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'leadWork'},
      'React Native, SQLite',
      {tKey: 'businessLogic', text: 'Offline-first local RAG, on-device OCR'},
      'Wi-Fi Direct & BLE mesh networking',
      {tKey: 'pwa', text: 'Scholar Credits marketplace'},
      {tKey: 'march', text: 2026},
    ],
    images: {
      logo: logo('uniflow'),
      desktop: shots('uniflow', 3),
    },
  },
  {
    name: 'agri-flow-ai',
    color: 'grass',
    title: 'Agri-Flow AI',
    textValues: ['Akivara Technologies', "Africa's Talking"],
    types: ['app'],
    companyName: 'akivara',
    details: '', // TODO
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'teamWork'},
      'TensorFlow Lite, React Native, Supabase',
      {tKey: 'businessLogic', text: 'Three-agent AI swarm for logistics'},
      "Africa's Talking USSD/SMS integration",
      {tKey: 'wholeDevelopment', text: 'Ghost-Net mesh connectivity'},
      {tKey: 'january', text: 2026},
    ],
    images: {
      logo: logo('agri-flow-ai'),
      desktop: shots('agri-flow-ai', 3),
    },
  },
  {
    name: 'schoolcore',
    color: 'yellow',
    title: 'SchoolCore Zambia',
    types: ['app', 'admin'],
    companyName: 'independent',
    details: '',
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'Next.js 15, Supabase',
      {tKey: 'responsive', text: 'SMS-first, offline-friendly design'},
      {tKey: 'businessLogic', text: 'K-12 school administration'},
      {tKey: 'darkTheme'},
      {tKey: 'may', text: 2025},
    ],
    images: {
      logo: logo('schoolcore'),
      desktop: shots('schoolcore', 3),
    },
  },
  {
    name: 'weather-app',
    color: 'blue',
    title: 'Weather App',
    types: ['app'],
    companyName: 'independent',
    details: '',
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'JavaScript, Node.js, Express',
      {tKey: 'responsive', text: 'Modular front-end architecture'},
      {tKey: 'wholeDevelopment', text: 'Express backend proxy for API keys'},
      {tKey: 'fastDevelopment'},
      {tKey: 'april', text: 2025},
    ],
    images: {
      logo: logo('weather-app'),
      desktop: shots('weather-app', 3),
    },
  },
  {
    name: 'essie-gift',
    color: 'red',
    title: "Essie's Birthday Gift",
    types: ['site'],
    companyName: 'independent',
    details: '',
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'JavaScript, CSS animation',
      {tKey: 'animations', text: 'Animated heart garden, typewriter letter'},
      {tKey: 'responsive', text: 'Photo gallery & background music'},
      {tKey: 'firstProject'},
      {tKey: 'february', text: 2026},
    ],
    images: {
      logo: logo('essie-gift'),
      desktop: shots('essie-gift', 3),
    },
  },
  {
    name: 'startech',
    color: 'default',
    title: 'Startech Communications',
    textValues: ['Startech Communications'],
    types: ['landing', 'site'],
    companyName: 'independent',
    details: '',
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'HTML, CSS, JavaScript',
      {tKey: 'responsive'},
      {tKey: 'design'},
      {tKey: 'fastDevelopment'},
      {tKey: 'december', text: 2025},
    ],
    images: {
      logo: logo('startech'),
      desktop: shots('startech', 3),
    },
  },
  {
    name: 'ig-meme-pipeline',
    color: 'violet',
    title: 'Instagram Meme Pipeline',
    textValues: ['GitHub Actions'],
    types: ['app'],
    companyName: 'independent',
    details: '', // TODO
    features: [
      {tKey: 'wholeDevelopment'},
      {tKey: 'soloWork'},
      'GitHub Actions, Python, Pillow',
      {tKey: 'businessLogic', text: 'Anthropic API for caption generation'},
      {tKey: 'wholeDevelopment', text: 'Imgflip & Instagram Graph API automation'},
      {tKey: 'newArchitecture'},
      {tKey: 'june', text: 2025},
    ],
    images: {
      logo: logo('ig-meme-pipeline'),
      desktop: shots('ig-meme-pipeline', 3),
    },
  },
]

export default projects

export const PROJECTS_COUNT: number = projects.length
