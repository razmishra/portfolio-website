import { skills } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="skills-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          Technical Skills
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.04}>
            <div className="border-t border-line pt-4">
              <h3 className="font-display text-base font-semibold text-ink">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded bg-accent-soft px-2.5 py-1 font-body text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
