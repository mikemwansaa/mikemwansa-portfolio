import {memo} from 'react'

import './Sidebar.scss'
import {Logo, Navigation} from '#components/common'

const Sidebar = memo(() => (
  <aside className="Sidebar">
    <div>
      <Logo />
      <Navigation />
    </div>
  </aside>
))

export default Sidebar
