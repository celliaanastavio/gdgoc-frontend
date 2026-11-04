export interface ApiResponse<T> {
  success: boolean
  count: number
  data: T
}

export interface Track {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  skills: string[]
  what_you_do: string
  explore_link: string
  open: boolean
}

export interface Faq {
  id: string
  question: string
  answer: string
  category: string
}

export interface NavItem {
  label: string
  href: string
}