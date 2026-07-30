import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const logLines = [
  '> whoami: rajneesh_mishra',
  '> role: full_stack_engineer',
  '> based_in: noida, india',
  '> years_experience: 2.5+',
  '> stack: react, next.js, node.js, mongodb, redis, aws',
  '> live_products_shipped: 2 (500+ signups, 50K+ users, $300+)',
  '> currently: building things that hold up under real traffic',
]

function scrollToProjects() {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="overview" aria-labelledby="hero-heading" className="scroll-mt-20 lg:scroll-mt-8">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
        <div
          className="rounded border border-line bg-bg-base p-4 sm:p-5"
          aria-label="Systems status log"
        >
          <div className="mb-3 flex items-center gap-2 border-b border-line pb-3">
            <span className="inline-block h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            <span className="font-mono text-xs tracking-wider text-ink-soft uppercase">
              systems.log
            </span>
          </div>
          <div className="font-mono text-data space-y-2 text-ink">
            {logLines.map((line, index) =>
              reduced ? (
                <p key={line} className="break-words">
                  <span className="text-accent">{line.slice(0, 1)}</span>
                  {line.slice(1)}
                </p>
              ) : (
                <motion.p
                  key={line}
                  className="break-words"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.22,
                    ease: 'easeOut',
                  }}
                >
                  <span className="text-accent">{line.slice(0, 1)}</span>
                  {line.slice(1)}
                </motion.p>
              ),
            )}
          </div>
        </div>

        <div>
          <h1
            id="hero-heading"
            className="font-display text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[1.1]"
          >
            Rajneesh Mishra
          </h1>
          <p className="mt-4 max-w-md font-body text-body text-ink-soft">
            <span className="font-display font-medium text-ink">Full Stack Engineer</span>
            {' '}building and shipping systems that hold up under real traffic and real users.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded bg-accent px-5 py-2.5 font-body text-sm font-medium text-[#16213A] transition-opacity hover:opacity-90"
            >
              View Projects
            </button>
            <a
              href={import.meta.env.VITE_RESUME_URL}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-line px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
