import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem } from '../../types'
import Button from '../ui/Button'

export default function Navbar() {
  const { data } = useFetch<NavItem[]>('/navigation')

  return (
    <header className="border-b border-line bg-white">
      <nav className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 md:h-[104px] md:flex-nowrap md:px-16 md:py-0">
        <Link to="/" aria-label="GDGoC UGM, kembali ke Home">
          <img
            src={logo}
            alt="Google Developer Groups On Campus Universitas Gadjah Mada"
            className="h-8 w-auto md:h-[38.7px]"
          />
        </Link>

        <ul className="order-last flex w-full gap-2 overflow-x-auto md:order-none md:w-auto">
          {data?.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `block rounded-full px-5 py-3.5 text-base ${
                    isActive
                      ? 'bg-tint-blue font-bold text-link'
                      : 'text-muted hover:bg-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden sm:block">
          <Button to="/overview">Find your track</Button>
        </div>
      </nav>
    </header>
  )
}