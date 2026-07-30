import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('overview')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const ids = ['overview', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const id = visible[0].target.id
          // Map about into overview for nav highlight since about has no nav item
          setActiveSection(id === 'about' ? 'overview' : id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <div className="min-h-screen bg-bg-base text-ink">
      <Sidebar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        mobileOpen={mobileOpen}
        onMobileOpen={() => setMobileOpen(true)}
        onMobileClose={() => setMobileOpen(false)}
      />

      <main className="px-5 pb-16 pt-20 sm:px-8 lg:ml-60 lg:px-12 lg:pt-12 xl:px-16">
        <div className="mx-auto max-w-4xl space-y-4">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  )
}
