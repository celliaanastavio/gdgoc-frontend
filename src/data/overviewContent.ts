export const sectionLinks = [
  { label: 'Learning tracks', href: '#tracks' },
  { label: 'Learning formats', href: '#formats' },
  { label: 'Your learning journey', href: '#journey' },
  { label: 'Find a starting point', href: '#start' },
]

export const outcomes = [
  {
    pathway: 'Research & discovery',
    practice: 'Listening, problem framing, and testing assumptions',
    outcome: 'A research insight and a focused problem brief',
  },
  {
    pathway: 'Design & creativity',
    practice: 'Ideation, user flows, and prototype feedback',
    outcome: 'An interactive prototype and a design story',
  },
  {
    pathway: 'Development',
    practice: 'Coding, testing, and connecting tools',
    outcome: 'A working demo with a clear explanation',
  },
]

export const formatMeta: Record<string, { order: number; bestFor: string; tint: string }> = {
  'study-groups': { order: 1, bestFor: 'Learning the fundamentals', tint: 'bg-tint-blue' },
  'hands-on-workshops': { order: 2, bestFor: 'Trying something new', tint: 'bg-tint-green' },
  'project-circles': { order: 3, bestFor: 'Putting skills into practice', tint: 'bg-tint-yellow' },
  'knowledge-sharing': { order: 4, bestFor: 'Exchanging perspectives', tint: 'bg-tint-red' },
}
