import {publicImg} from '#utils/helpers'
import GitHubIcon from '#assets/icons/github.svg?react'
import LinkedInIcon from '#assets/icons/linkedin.svg?react'
import InstagramIcon from '#assets/icons/instagram.svg?react'
import TelegramIcon from '#assets/icons/telegram.svg?react'
import WhatsAppIcon from '#assets/icons/whatsapp.svg?react'
import type {ISocialLink, ICompany} from '#utils/types'

interface IContactLink {
  gitHub: ISocialLink
  linkedIn: ISocialLink
  instagram: ISocialLink
  telegram: ISocialLink
  whatsApp: ISocialLink
}

interface ICompanyData {
  akivara: ICompany
  unza: ICompany
  independent: ICompany
  dumela: ICompany
}

export const MY_NAME = 'Mike Mwansa'

// TODO: swap in your real venture/school logos if you have proper artwork.
// Placeholder monogram badges live in /public/assets/companies
export const COMPANY: ICompanyData = {
  akivara: {
    title: 'Akivara Technologies',
    name: 'akivara',
    images: [
      publicImg('companies/akivara.png'),
      publicImg('companies/akivara@2x.png'),
    ],
    color: 'grass',
    href: 'https://akivara.dev', // TODO: replace with your real Akivara Technologies URL
  },
  unza: {
    title: 'University of Zambia',
    name: 'unza',
    images: [publicImg('companies/unza.png'), publicImg('companies/unza@2x.png')],
    color: 'blue',
    href: 'https://www.unza.zm',
  },
  independent: {
    title: 'Independent Projects',
    name: 'independent',
    images: [
      publicImg('companies/independent.png'),
      publicImg('companies/independent@2x.png'),
    ],
    color: 'default',
    href: '#',
  },
  dumela: {
    title: 'Dumela General Dealers',
    name: 'dumela',
    images: [
      publicImg('companies/dumela.png'),
      publicImg('companies/dumela@2x.png'),
    ],
    color: 'red',
    href: '#',
  },
}

// TODO: fill in your real handles/URLs before deploying
export const CONTACT_LINK: IContactLink = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/mikemwansaa', // TODO
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/mikemwansaa', // TODO
    Icon: LinkedInIcon,
    size: 'sm',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/mikemwansaa', // TODO
    Icon: TelegramIcon,
    size: 'md',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://instagram.com/mikemwansaa', // TODO
    Icon: InstagramIcon,
    size: 'md',
  },
  whatsApp: {
    title: 'WhatsApp',
    href: 'https://wa.me/260972528770', // TODO: replace with your real WhatsApp number, e.g. https://wa.me/260971234567
    Icon: WhatsAppIcon,
    size: 'md',
  },
}

// TODO: replace with your real contact email
export const CONTACT_EMAIL = 'mikemwansa114@gmail.com'

export const FEATURE = {
  rest: 'REST API',
  realtime: 'Realtime subscriptions',
  offline: 'Offline-first sync',
}
