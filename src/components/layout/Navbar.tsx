import { NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem } from '../../types'

export default function Navbar() {
  const { data } = useFetch<NavItem[]>('/navigation')

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold">GDGoC UGM</span>
        <ul className="flex gap-6 text-sm">
          {data?.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}