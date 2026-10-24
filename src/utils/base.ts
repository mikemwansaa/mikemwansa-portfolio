import {MY_NAME, CONTACT_LINK} from '#data/common'
import {DURATION} from '#styles/theme'

export const handleAppLoaded = () => {
  const preloader = document.getElementById('preloader') as HTMLElement
  document.body.style.overflow = 'auto'
  preloader.classList.remove('Preloader_show')
  setTimeout(() => preloader.remove(), DURATION.longer)
}

export const logConsoleWelcomeMessage = () => {
  const consoleTextStyle = 'font-size: 16px;'
  const consoleBoldTextStyle = `${consoleTextStyle} font-weight: bold;`
  console.log(
    `%cHi there! 👋\nI'm %c${MY_NAME}%c, a %cSoftware Engineer & Founder of Akivara Technologies%c 👨‍💻\nCheck out the source ${CONTACT_LINK.gitHub.href} 🚀`,
    consoleTextStyle,
    consoleBoldTextStyle,
    consoleTextStyle,
    consoleBoldTextStyle,
    consoleTextStyle
  )
}
