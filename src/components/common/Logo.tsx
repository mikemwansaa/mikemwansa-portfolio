import {Link} from 'react-router-dom'

import './Logo.scss'
import logoMark from '#assets/img/logo-mark.png'
import {ROUTE} from '#utils/constants'
import {MY_NAME} from '#data/common'

export default function Logo() {
  return (
    <Link className="Logo" to={ROUTE.home}>
      <img className="Logo-Svg" src={logoMark} alt={MY_NAME} />
    </Link>
  )
}
