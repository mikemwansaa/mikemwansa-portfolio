import {useState, useEffect} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Link as MuiLink} from '@mui/material'
import {
  ScheduleRounded as ScheduleIcon,
  MyLocationRounded as MyLocationIcon,
  DateRangeRounded as DateRangeIcon,
  RoomRounded as RoomIcon,
} from '@mui/icons-material'

import './Work.scss'
import {Animate, Section, ExpandAction} from '#components/common'
import {CAREER_START_YEAR, CAREER_START_PARTS, BLANK_LINK_PROPS} from '#utils/constants'
import {COMPANY, FEATURE} from '#data/common'
import Job from './Job'
import type {IJob, TCompanyName} from '#utils/types'

export default function Work() {
  const {t} = useTranslation()
  const [expanded, setExpanded] = useState<TCompanyName[]>(() => {
    const storedExpanded = localStorage.getItem('expanded')
    return storedExpanded ? JSON.parse(storedExpanded) : [jobs[0].name]
  })

  useEffect(() => {
    localStorage.setItem('expanded', JSON.stringify(expanded))
  }, [expanded])

  const handleExpand = (companyName: TCompanyName) =>
    setExpanded(state =>
      state.includes(companyName)
        ? state.filter(name => name !== companyName)
        : [...state, companyName]
    )

  const isAllExpanded = jobs.every(job => expanded.includes(job.name))

  const handleExpandAll = () =>
    setExpanded(isAllExpanded ? [] : jobs.map(job => job.name))

  return (
    <Section>
      <h1 className="Title">{t('title.experience')}</h1>
      <p className="MainText">
        <Trans
          i18nKey="experience.text"
          values={[COMPANY.akivara.title, CAREER_START_YEAR]}
          components={[
            <strong />,
            <MuiLink
              {...BLANK_LINK_PROPS}
              className="Link"
              href={COMPANY.akivara.href}
            />,
          ]}
        />
        .
      </p>
      <Animate el="ul" className="Work">
        {jobs.map(job => (
          <Job
            key={job.name}
            job={job}
            t={t}
            expanded={expanded.includes(job.name)}
            onExpand={handleExpand}
          />
        ))}
      </Animate>
      <ExpandAction
        type="second"
        expanded={isAllExpanded}
        onToggle={handleExpandAll}
      />
    </Section>
  )
}

const jobs: IJob[] = [
  {
    name: COMPANY.akivara.name,
    current: true,
    company: COMPANY.akivara,
    occupations: ['founder'],
    tools: [
      'react',
      'reactnative',
      'ts',
      'js',
      'python',
      'supabase',
      'node',
      'express',
      'tailwind',
      'git',
      'github',
      'figma',
      'claudecode',
      'claude',
      'vercel',
    ],
    duties: [
      'structureProjects',
      'logicAppsSites',
      {tKey: 'restSocket', values: [FEATURE.rest, FEATURE.realtime]},
      'design',
      'scratch',
      'tasks',
      'partIntegration',
    ],
    achievements: [
      'resultForeign',
      'architecture',
      'independent',
      {
        tKey: 'technologiesBase',
        values: ['React Native', 'Supabase', 'AI agent swarms'],
      },
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'january',
            year: 2025,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyPart', Icon: ScheduleIcon},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'lusaka', Icon: RoomIcon},
    ],
  },
  {
    name: COMPANY.unza.name,
    company: COMPANY.unza,
    occupations: ['student'],
    tools: ['java', 'python', 'kotlin', 'mysql', 'html', 'css', 'js', 'git'],
    duties: [
      'refactor',
      'tasks',
      {tKey: 'rest', values: [FEATURE.rest]},
    ],
    achievements: [
      'resultForeign',
      {
        tKey: 'technologiesBase',
        values: ['Computer Architecture', 'Discrete Structures', 'Database Systems'],
      },
      'work',
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'january',
            year: 2025,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'lusaka', Icon: RoomIcon},
    ],
  },
  {
    name: COMPANY.dumela.name,
    company: COMPANY.dumela,
    occupations: ['assistant'],
    tools: [],
    duties: [
      'printing',
      'typing',
      'refill',
      'binding',
      'design',
    ],
    achievements: [
      'work',
      {
        tKey: 'technologiesBase',
        values: ['Customer service', 'Graphic design', 'Print production'],
      },
    ],
    features: [
      {
        period: {
          from: {
            tKey: 'january',
            year: 2023,
          },
          to: {
            tKey: 'december',
            year: 2024,
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyFull', Icon: ScheduleIcon},
      {tKey: 'office', Icon: MyLocationIcon},
      {tKey: 'lusaka', Icon: RoomIcon},
    ],
  },
  {
    name: COMPANY.independent.name,
    company: COMPANY.independent,
    occupations: ['developer'],
    tools: [
      'js',
      'ts',
      'react',
      'next',
      'node',
      'express',
      'python',
      'supabase',
      'mysql',
      'cloudinary',
      'tailwind',
      'git',
      'github',
      'vscode',
    ],
    duties: [
      'logicAppsSites',
      'structureProjects',
      'responsive',
      'scratch',
      'design',
      'support',
    ],
    achievements: [
      'resultForeign',
      'independent',
      {
        tKey: 'technologiesBase',
        values: ['JavaScript', 'React', 'Node.js'],
      },
    ],
    features: [
      {
        period: {
          from: {
            tKey: CAREER_START_PARTS[0],
            year: CAREER_START_PARTS[1],
          },
        },
        Icon: DateRangeIcon,
      },
      {tKey: 'busyPart', Icon: ScheduleIcon},
      {tKey: 'remote', Icon: MyLocationIcon},
      {tKey: 'lusaka', Icon: RoomIcon},
    ],
  },
]
