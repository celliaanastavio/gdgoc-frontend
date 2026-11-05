import type { ComponentType } from 'react'
import { ValueBookIcon, ValueCodeIcon, ValuePeopleIcon } from '../components/ui/AboutIcons'

export interface LearningFormatCard {
  title: string
  description: string
  detail: string
  Icon: ComponentType<{ className?: string }>
}

export const learningFormats: LearningFormatCard[] = [
  {
    title: 'Study together',
    description:
      'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.',
    detail: 'Study groups & guided practice',
    Icon: ValueBookIcon,
  },
  {
    title: 'Try it hands-on',
    description:
      'Explore a tool or technique in a workshop, then put it to work in a small experiment.',
    detail: 'Workshops & technical sessions',
    Icon: ValueCodeIcon,
  },
  {
    title: 'Share the process',
    description:
      'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
    detail: 'Project circles & sharing sessions',
    Icon: ValuePeopleIcon,
  },
]

export const firstMoves = [
  {
    number: '01',
    title: 'Follow your curiosity',
    description: 'Explore the tracks and find a topic you want to understand better.',
  },
  {
    number: '02',
    title: 'Learn alongside others',
    description: 'Join a learning opportunity, ask a question, and share your perspective.',
  },
  {
    number: '03',
    title: 'Turn learning into action',
    description: 'Practice through a project, exchange feedback, and pass something on.',
  },
]