import ssdsvg from '../assets/ssd.svg'

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

export const EditorCanvasDefaultCardTypes = {
  Email: { description: 'Send and email to a user', type: 'Action' },
  Condition: {
    description: 'Boolean operator that creates different conditions lanes.',
    type: 'Action',
  },
  AI: {
    description:
      'Use the power of AI to summarize, respond, create and much more.',
    type: 'Action',
  },
  Slack: { description: 'Send a notification to slack', type: 'Action' },
  'Google Drive': {
    description:
      'Connect with Google drive to trigger actions or to create files and folders.',
    type: 'Trigger',
  },
  Notion: { description: 'Create entries directly in notion.', type: 'Action' },
  'Custom Webhook': {
    description:
      'Connect any app that has an API key and send data to your applicaiton.',
    type: 'Action',
  },
  Discord: {
    description: 'Post messages to your discord server',
    type: 'Action',
  },
  'Google Calendar': {
    description: 'Create a calendar invite.',
    type: 'Action',
  },
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Action: {
    description: 'An event that happens after the workflow begins',
    type: 'Action',
  },
  Wait: {
    description: 'Delay the next action step by using the wait timer.',
    type: 'Action',
  },
}
