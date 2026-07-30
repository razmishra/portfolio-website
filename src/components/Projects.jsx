import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="projects-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          Projects
        </h2>
      </Reveal>

      <div className="mt-8 space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05}>
            <article className="border-t border-line pt-6">
              <div className="flex flex-wrap items-center gap-3">
                {project.live && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-success uppercase">
                    <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                    LIVE
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.badges
                  .filter((badge) => badge !== 'LIVE')
                  .map((badge) => (
                    <span
                      key={badge}
                      className="rounded bg-accent-soft px-2 py-0.5 font-mono text-xs tracking-wider text-ink uppercase"
                    >
                      {badge}
                    </span>
                  ))}
              </div>

              <p className="mt-3 font-mono text-data text-ink-soft">
                {project.stack.join(' · ')}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 font-body text-sm text-accent transition-opacity hover:opacity-80"
              >
                {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <ExternalLink size={14} aria-hidden="true" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>

              <ul className="mt-4 space-y-3">
                {project.description.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-body text-ink-soft"
                  >
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-line"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
