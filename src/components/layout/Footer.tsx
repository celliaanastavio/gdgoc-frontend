import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem, Stats } from '../../types'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '../ui/Icons'

const signature = ['bg-brand-blue', 'bg-brand-red', 'bg-brand-yellow', 'bg-brand-green']

export default function Footer() {
  const { data: stats } = useFetch<Stats>('/stats')
  const { data: nav } = useFetch<NavItem[]>('/navigation')

  const handle = stats?.social.instagram ?? '@gdgoc.ugm'

  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-7 pt-14 md:px-16 xl:px-24">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-[480px]">
            <img
              src={logo}
              alt="Google Developer Groups On Campus Universitas Gadjah Mada"
              className="h-[42.7px] w-fit"
            />
            <p className="text-base leading-[1.55] text-muted">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 md:w-[150px]">
            <p className="text-base font-bold text-ink">Explore</p>
            {nav?.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[15px] text-muted hover:text-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:w-[260px]">
            <p className="text-base font-bold text-ink">Keep in the loop</p>
            <p className="text-lg text-link">{handle}</p>
            {stats && (
              <div className="flex gap-4 text-muted">
                <a
                  href={`https://instagram.com/${stats.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-link"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={`https://www.linkedin.com/company/${stats.social.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-link"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={`https://github.com/${stats.social.github}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-link"
                >
                  <GithubIcon />
                </a>
              </div>
            )}
            <p className="text-sm leading-[1.55] text-muted">
              {stats?.tagline ?? 'Learn together. Build together.'}
            </p>
          </div>
        </div>

        <hr className="border-line" />

        <div className="flex flex-col justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        <div className="flex h-1 w-40">
          {signature.map((color) => (
            <span key={color} className={`flex-1 ${color}`} />
          ))}
        </div>
      </div>
    </footer>
  )
}
