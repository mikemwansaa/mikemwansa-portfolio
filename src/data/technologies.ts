import {publicImg} from '#utils/helpers'
import type {ITechnologyGroup, ITechnology} from '#utils/types'

export const TECHNOLOGY_TITLE = {
  js: 'JavaScript',
  ts: 'TypeScript',
  python: 'Python',
  java: 'Java',
  kotlin: 'Kotlin',
  react: 'React',
  reactnative: 'React Native',
  next: 'Next.js',
  vite: 'Vite',
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  tailwind: 'Tailwind CSS',
  mui: 'Material UI',
  node: 'Node.js',
  express: 'Express',
  supabase: 'Supabase',
  mysql: 'MySQL',
  cloudinary: 'Cloudinary',
  git: 'Git',
  github: 'GitHub Actions',
  npm: 'npm',
  vscode: 'Visual Studio Code',
  figma: 'Figma',
  vercel: 'Vercel',
  netlify: 'Netlify',
  cloudflare: 'Cloudflare',
  docker: 'Docker',
  azure: 'Azure',
  firebase: 'Firebase',
  claudecode: 'Claude Code',
  claude: 'Claude',
  gpt: 'ChatGPT',
  cursor: 'Cursor',
}

const commonTechnologyImages = {
  react: [
    publicImg('technologies/react.png'),
    publicImg('technologies/react@2x.png'),
  ],
}

export const TECHNOLOGY_GROUPS: ITechnologyGroup[] = [
  {
    tKey: 'logic',
    technologies: [
      {
        name: 'js',
        label: TECHNOLOGY_TITLE.js,
        color: 'yellow',
        images: [publicImg('technologies/js.png'), publicImg('technologies/js@2x.png')],
        href: 'https://developer.mozilla.org/docs/Web/JavaScript',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: 'blue',
        images: [publicImg('technologies/ts.png'), publicImg('technologies/ts@2x.png')],
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'python',
        label: TECHNOLOGY_TITLE.python,
        color: 'blue',
        images: [
          publicImg('technologies/python.png'),
          publicImg('technologies/python@2x.png'),
        ],
        href: 'https://www.python.org',
      },
      {
        name: 'java',
        label: TECHNOLOGY_TITLE.java,
        color: 'red',
        images: [
          publicImg('technologies/java.png'),
          publicImg('technologies/java@2x.png'),
        ],
        href: 'https://www.java.com',
      },
      {
        name: 'kotlin',
        label: TECHNOLOGY_TITLE.kotlin,
        color: 'violet',
        images: [
          publicImg('technologies/kotlin.png'),
          publicImg('technologies/kotlin@2x.png'),
        ],
        href: 'https://kotlinlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: 'blue',
        images: commonTechnologyImages.react,
        href: 'https://react.dev',
      },
      {
        name: 'reactnative',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        images: [
          publicImg('technologies/react.png'),
          publicImg('technologies/react@2x.png'),
        ],
        href: 'https://reactnative.dev',
      },
      {
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: 'default',
        images: [publicImg('technologies/next.png'), publicImg('technologies/next@2x.png')],
        href: 'https://nextjs.org',
      },
      {
        name: 'vite',
        label: TECHNOLOGY_TITLE.vite,
        color: 'violet',
        images: [publicImg('technologies/vite.png'), publicImg('technologies/vite@2x.png')],
        href: 'https://vite.dev',
      },
    ],
  },
  {
    tKey: 'markup',
    technologies: [
      {
        name: 'html',
        label: TECHNOLOGY_TITLE.html,
        color: 'red',
        images: [publicImg('technologies/html.png'), publicImg('technologies/html@2x.png')],
        href: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'css',
        label: TECHNOLOGY_TITLE.css,
        color: 'blue',
        images: [publicImg('technologies/css.png'), publicImg('technologies/css@2x.png')],
        href: 'https://developer.mozilla.org/docs/Web/CSS',
      },
    ],
  },
  {
    tKey: 'styles',
    technologies: [
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: 'red',
        images: [publicImg('technologies/sass.png'), publicImg('technologies/sass@2x.png')],
        href: 'https://sass-lang.com',
      },
      {
        name: 'tailwind',
        label: TECHNOLOGY_TITLE.tailwind,
        color: 'blue',
        images: [
          publicImg('technologies/tailwind.png'),
          publicImg('technologies/tailwind@2x.png'),
        ],
        href: 'https://tailwindcss.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: 'blue',
        images: [publicImg('technologies/mui.png'), publicImg('technologies/mui@2x.png')],
        href: 'https://mui.com',
      },
    ],
  },
  {
    tKey: 'services',
    technologies: [
      {
        name: 'node',
        label: TECHNOLOGY_TITLE.node,
        color: 'grass',
        images: [publicImg('technologies/node.png'), publicImg('technologies/node@2x.png')],
        href: 'https://nodejs.org',
      },
      {
        name: 'express',
        label: TECHNOLOGY_TITLE.express,
        color: 'default',
        images: [
          publicImg('technologies/express.png'),
          publicImg('technologies/express@2x.png'),
        ],
        href: 'https://expressjs.com',
      },
      {
        name: 'supabase',
        label: TECHNOLOGY_TITLE.supabase,
        color: 'grass',
        images: [
          publicImg('technologies/supabase.png'),
          publicImg('technologies/supabase@2x.png'),
        ],
        href: 'https://supabase.com',
      },
      {
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: 'blue',
        images: [publicImg('technologies/mysql.png'), publicImg('technologies/mysql@2x.png')],
        href: 'https://www.mysql.com',
      },
      {
        name: 'cloudinary',
        label: TECHNOLOGY_TITLE.cloudinary,
        color: 'blue',
        images: [
          publicImg('technologies/cloudinary.png'),
          publicImg('technologies/cloudinary@2x.png'),
        ],
        href: 'https://cloudinary.com',
      },
      {
        name: 'firebase',
        label: TECHNOLOGY_TITLE.firebase,
        color: 'yellow',
        images: [
          publicImg('technologies/firebase.png'),
          publicImg('technologies/firebase@2x.png'),
        ],
        href: 'https://firebase.google.com',
      },
    ],
  },
  {
    tKey: 'utils',
    technologies: [
      {
        name: 'git',
        label: TECHNOLOGY_TITLE.git,
        color: 'red',
        images: [publicImg('technologies/git.png'), publicImg('technologies/git@2x.png')],
        href: 'https://git-scm.com',
      },
      {
        name: 'github',
        label: TECHNOLOGY_TITLE.github,
        color: 'default',
        images: [
          publicImg('technologies/github.png'),
          publicImg('technologies/github@2x.png'),
        ],
        href: 'https://github.com/features/actions',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: 'red',
        images: [publicImg('technologies/npm.png'), publicImg('technologies/npm@2x.png')],
        href: 'https://www.npmjs.com',
      },
    ],
  },
  {
    tKey: 'deploy',
    technologies: [
      {
        name: 'vercel',
        label: TECHNOLOGY_TITLE.vercel,
        color: 'default',
        images: [
          publicImg('technologies/vercel.png'),
          publicImg('technologies/vercel@2x.png'),
        ],
        href: 'https://vercel.com',
      },
      {
        name: 'netlify',
        label: TECHNOLOGY_TITLE.netlify,
        color: 'blue',
        images: [
          publicImg('technologies/netlify.png'),
          publicImg('technologies/netlify@2x.png'),
        ],
        href: 'https://www.netlify.com',
      },
      {
        name: 'cloudflare',
        label: TECHNOLOGY_TITLE.cloudflare,
        color: 'yellow',
        images: [
          publicImg('technologies/cloudflare.png'),
          publicImg('technologies/cloudflare@2x.png'),
        ],
        href: 'https://www.cloudflare.com',
      },
      {
        name: 'docker',
        label: TECHNOLOGY_TITLE.docker,
        color: 'blue',
        images: [
          publicImg('technologies/docker.png'),
          publicImg('technologies/docker@2x.png'),
        ],
        href: 'https://www.docker.com',
      },
      {
        name: 'azure',
        label: TECHNOLOGY_TITLE.azure,
        color: 'blue',
        images: [publicImg('technologies/azure.png'), publicImg('technologies/azure@2x.png')],
        href: 'https://azure.microsoft.com',
      },
    ],
  },
  {
    tKey: 'ai',
    technologies: [
      {
        name: 'claudecode',
        label: TECHNOLOGY_TITLE.claudecode,
        color: 'default',
        images: [
          publicImg('technologies/claudecode.png'),
          publicImg('technologies/claudecode@2x.png'),
        ],
        href: 'https://claude.com/claude-code',
      },
      {
        name: 'claude',
        label: TECHNOLOGY_TITLE.claude,
        color: 'default',
        images: [
          publicImg('technologies/claude.png'),
          publicImg('technologies/claude@2x.png'),
        ],
        href: 'https://claude.ai',
      },
      {
        name: 'gpt',
        label: TECHNOLOGY_TITLE.gpt,
        color: 'grass',
        images: [publicImg('technologies/gpt.png'), publicImg('technologies/gpt@2x.png')],
        href: 'https://chatgpt.com',
      },
      {
        name: 'cursor',
        label: TECHNOLOGY_TITLE.cursor,
        color: 'default',
        images: [
          publicImg('technologies/cursor.png'),
          publicImg('technologies/cursor@2x.png'),
        ],
        href: 'https://cursor.sh',
      },
    ],
  },
  {
    tKey: 'software',
    technologies: [
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLE.vscode,
        color: 'blue',
        images: [
          publicImg('technologies/vscode.png'),
          publicImg('technologies/vscode@2x.png'),
        ],
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'violet',
        images: [publicImg('technologies/figma.png'), publicImg('technologies/figma@2x.png')],
        href: 'https://figma.com',
      },
    ],
  },
]

const TECHNOLOGIES: ITechnology[] = TECHNOLOGY_GROUPS.map(
  group => group.technologies
).flat()

export default TECHNOLOGIES
