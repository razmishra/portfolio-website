import { Mail, Menu, X } from 'lucide-react'
import { navItems, socialLinks } from '../data/nav'
import { GitHubIcon, LinkedInIcon } from './icons'
import ThemeToggle from './ThemeToggle'

export default function Sidebar({
  activeSection,
  theme,
  onToggleTheme,
  mobileOpen,
  onMobileOpen,
  onMobileClose,
}) {
  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onMobileClose()
  }

  const navContent = (
    <>
      <div className="mb-8">
        <p className="font-display text-xl font-semibold tracking-tight text-ink">
          Rajneesh Mishra
        </p>
        <p className="mt-1 font-body text-sm text-ink-soft">Full Stack Engineer</p>
      </div>

      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full rounded px-3 py-2 text-left font-body text-sm transition-colors ${
                    isActive
                      ? 'bg-accent-soft text-ink font-medium'
                      : 'text-ink-soft hover:bg-line/60 hover:text-ink'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${
                      isActive ? 'bg-accent' : 'bg-transparent'
                    }`}
                    aria-hidden="true"
                  />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto space-y-6 pt-8">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

        <div className="flex items-center gap-3 border-t border-line pt-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded p-1.5 text-ink-soft transition-colors hover:text-accent"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded p-1.5 text-ink-soft transition-colors hover:text-accent"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email"
            className="rounded p-1.5 text-ink-soft transition-colors hover:text-accent"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-bg-base px-4 lg:hidden">
        <div>
          <p className="font-display text-base font-semibold text-ink">Rajneesh Mishra</p>
          <p className="font-body text-xs text-ink-soft">Full Stack Engineer</p>
        </div>
        <button
          type="button"
          onClick={onMobileOpen}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          className="rounded p-2 text-ink hover:bg-line/60"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-line bg-bg-base p-6 transition-transform duration-200 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          onClick={onMobileClose}
          aria-label="Close navigation menu"
          className="absolute right-4 top-4 rounded p-1.5 text-ink-soft hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>
        {navContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-bg-base p-6 lg:flex"
        aria-label="Site navigation"
      >
        {navContent}
      </aside>
    </>
  )
}
