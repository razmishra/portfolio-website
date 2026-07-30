import { experience } from '../data/experience'
import Reveal from './Reveal'

const METRIC_REGEX =
  /(\d[\d,]*(?:\.\d+)?%|\$\d[\d,]*(?:\.\d+)?\+?|\d[\d,]*(?:\.\d+)?s|\d[\d,]+\+|\d+\+)/g

function highlightMetrics(text) {
  const nodes = []
  let lastIndex = 0
  let match

  const regex = new RegExp(METRIC_REGEX.source, 'g')
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    nodes.push(
      <span key={`${match.index}-${match[0]}`} className="font-mono text-data text-accent">
        {match[0]}
      </span>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="experience-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          Work Experience
        </h2>
      </Reveal>

      <div className="mt-8 space-y-10">
        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
            <article className="border-t border-line pt-6">
              <header>
                <h3 className="font-display text-lg font-semibold text-ink">{job.title}</h3>
                <p className="mt-1 font-body text-sm text-ink-soft">
                  {job.company}, {job.location}
                </p>
                <p className="mt-1 font-mono text-data text-ink-soft">{job.period}</p>
              </header>
              <ul className="mt-4 space-y-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 font-body text-body text-ink-soft">
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{highlightMetrics(bullet)}</span>
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
