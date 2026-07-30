import Reveal from './Reveal'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="education-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          Education
        </h2>
        <article className="mt-6 border-t border-line pt-6">
          <h3 className="font-display text-lg font-semibold text-ink">
            National Institute of Technology Hamirpur
          </h3>
          <p className="mt-1 font-mono text-data text-ink-soft">Aug 2021 to May 2023</p>
          <p className="mt-3 font-body text-body text-ink-soft">
            M.Sc. in Mathematics &amp; Computing, CGPA:{' '}
            <span className="font-mono text-data text-accent">8.12/10</span>
          </p>
        </article>
      </Reveal>
    </section>
  )
}
