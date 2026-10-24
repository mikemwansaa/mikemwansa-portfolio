import cn from 'clsx'
import {useMediaQuery, Fab} from '@mui/material'
import type {CSSProperties} from 'react'

import './SocialLinks.scss'
import {getListDelay} from '#utils/helpers'
import {BLANK_LINK_PROPS, QUERY_BREAKPOINT} from '#utils/constants'
import Animate from './Animate'
import Tooltip from './Tooltip'
import type {ISocialLink} from '#utils/types'

interface ISocialLinksProps {
  links: ISocialLink[]
  about?: boolean
}

// Spreads icons evenly along the bottom arc of the circular photo (from
// lower-left to lower-right, passing through 6 o'clock), as percentages of
// the wrapper's own box — so it scales correctly at any screen size and
// with any number of icons, instead of relying on hardcoded per-breakpoint
// pixel offsets.
const ARC_START_DEG = 152
const ARC_END_DEG = 28
const ARC_RADIUS_PERCENT = 50

const getArcStyle = (index: number, count: number): CSSProperties => {
  if (count === 1) {
    return {left: '50%', top: '100%'}
  }
  const t = index / (count - 1)
  const angleDeg = ARC_START_DEG + t * (ARC_END_DEG - ARC_START_DEG)
  const angleRad = (angleDeg * Math.PI) / 180
  const left = 50 - ARC_RADIUS_PERCENT * Math.cos(angleRad)
  const top = 50 + ARC_RADIUS_PERCENT * Math.sin(angleRad)
  return {left: `${left}%`, top: `${top}%`}
}

export default function SocialLinks({links, about}: ISocialLinksProps) {
  const xs = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <ul className={cn('SocialLinks', about && 'SocialLinks_about')}>
      {links.map(({Icon, ...link}, index) => (
        <li
          key={index}
          className="SocialLinks-Item"
          style={about ? getArcStyle(index, links.length) : undefined}
        >
          <Animate
            el="span"
            className="SocialLinks-ItemInner"
            effect="zoomIn"
            delay={xs ? undefined : getListDelay(index)}
          >
            <Tooltip title={link.title}>
              <Fab
                {...BLANK_LINK_PROPS}
                component="a"
                className={cn('Button', about && 'Button_color_white')}
                href={link.href}
                aria-label={link.title}
              >
                <Icon
                  className={`SocialLinks-Icon SocialLinks-Icon_size_${link.size}`}
                />
              </Fab>
            </Tooltip>
          </Animate>
        </li>
      ))}
    </ul>
  )
}
