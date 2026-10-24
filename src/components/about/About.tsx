import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Link as MuiLink, Button} from '@mui/material'

import './About.scss'
import {
  SchoolRounded as SchoolIcon,
  CoffeeMakerRounded as CoffeeMakerIcon,
  DashboardCustomizeRounded as DashboardCustomizeIcon,
  LogoDevRounded as LogoDevIcon,
  AutoStoriesRounded as AutoStoriesIcon,
  CodeRounded as CodeIcon,
  SquareFootRounded as SquareFootIcon,
  CenterFocusStrongRounded as CenterFocusStrongIcon,
  BusinessCenterRounded as BusinessCenterIcon,
  EmojiEventsRounded as EmojiEventsIcon,
  PersonPinCircleRounded as PersonPinCircleIcon,
  HeadphonesRounded as HeadphonesIcon,
  DownloadRounded as DownloadIcon,
  VisibilityRounded as VisibilityIcon,
} from '@mui/icons-material'

import {Sections, Info} from '#components/common'
import {PROJECTS_COUNT} from '#data/projects'
import {TECHNOLOGY_TITLE} from '#data/technologies'
import {YEARS_OF_EXPERIENCE, ROUTE} from '#utils/constants'
import Social from './Social'
import ResumeViewer, {RESUME_URL} from './ResumeViewer'
import type {IFeature} from '#utils/types'

export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <Sections
      firstSection={
        <Info
          type="about"
          textValues={textValues}
          transComponents={transComponents}
          features={features}
        >
          {/* Resume: public/resume.pdf — update as your experience grows */}
          <div className="About-ResumeAction">
            <Button
              className="Button Button_color_blue"
              size="large"
              endIcon={<VisibilityIcon />}
              onClick={() => setResumeOpen(true)}
            >
              View resume
            </Button>
            <Button
              className="Button Button_color_blue"
              href={RESUME_URL}
              download
              size="large"
              endIcon={<DownloadIcon />}
            >
              Download resume
            </Button>
          </div>
          <ResumeViewer
            open={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </Info>
      }
      secondSection={<Social />}
    />
  )
}

const textValues = [YEARS_OF_EXPERIENCE, 'UI/UX', 'Akivara Technologies']

const transComponents = [
  <strong />,
  <MuiLink component={Link} className="Link" to={ROUTE.portfolio} />,
  <MuiLink component={Link} className="Link Lowercase" to={ROUTE.experience} />,
]

const features: IFeature[] = [
  {
    tKey: 'projects',
    Icon: DashboardCustomizeIcon,
    labelValues: [PROJECTS_COUNT],
    textValues: ['title.portfolio'],
    links: [<MuiLink component={Link} className="Link" to={ROUTE.portfolio} />],
  },
  {
    tKey: 'position',
    Icon: CodeIcon,
    links: [<MuiLink component={Link} className="Link" to={ROUTE.skills} />],
  },
  {
    tKey: 'experience',
    Icon: BusinessCenterIcon,
    labelValues: [YEARS_OF_EXPERIENCE],
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.experience} />,
    ],
  },
  {
    tKey: 'organizing',
    Icon: CenterFocusStrongIcon,
  },
  {
    tKey: 'programming',
    Icon: LogoDevIcon,
    textValues: [TECHNOLOGY_TITLE.js, TECHNOLOGY_TITLE.python],
    links: [<MuiLink component={Link} className="Link" to={ROUTE.portfolio} />],
  },
  {
    tKey: 'competitions',
    Icon: EmojiEventsIcon,
    textValues: ['ZNRAC', 'Africa Digi Free Competition'],
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.experience} />,
    ],
  },
  {
    tKey: 'growing',
    Icon: AutoStoriesIcon,
  },
  {
    tKey: 'perfect',
    Icon: SquareFootIcon,
  },
  {
    tKey: 'education',
    Icon: SchoolIcon,
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.experience} />,
    ],
  },
  {
    tKey: 'music',
    Icon: HeadphonesIcon,
    textValues: ['R&B', 'indie/alternative pop'],
  },
  {
    tKey: 'based',
    Icon: PersonPinCircleIcon,
    textValues: ['Lusaka, Zambia'],
  },
  {
    tKey: 'coffee',
    Icon: CoffeeMakerIcon,
  },
]
