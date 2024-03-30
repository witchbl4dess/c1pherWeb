import Home from '@/components/icon/home'
import Workflows from '@/components/icon/workflow'
import Settings from '@/components/icon/setting'
import Category from '@/components/icon/category'
import Payment from '@/components/icon/paiment'
import Templates from '@/components/icon/cloud'
import Logs from '@/components/icon/clipboard'

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

export const products = [
  {
    title: '/',
    link: 'https://cursor.so',
    thumbnail: '/1.png',
  },
  {
    title: '/bin',
    link: 'https://userogue.com',
    thumbnail: '/2.png',
  },

  {
    title: '/boot',
    link: 'https://editorially.org',
    thumbnail: '/3.png',
  },
  {
    title: '/dev',
    link: 'https://editrix.ai',
    thumbnail: '/4.png',
  },
  {
    title: '/etc',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/5.png',
  },
  {
    title: '/home',
    link: 'https://algochurn.com',
    thumbnail: '/6.png',
  },
  {
    title: '/lib',
    link: 'https://algochurn.com',
    thumbnail: '/7.png',
  },
  {
    title: '/media',
    link: 'https://algochurn.com',
    thumbnail: '/8.png',
  },
  {
    title: '/mnt',
    link: 'https://algochurn.com',
    thumbnail: '/9.png',
  },
  {
    title: '/opt',
    link: 'https://algochurn.com',
    thumbnail: '/10.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]