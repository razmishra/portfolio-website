import Reveal from './Reveal'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="about-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          About
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 font-body text-body text-ink-soft">
          <p>
            Rajneesh is a full stack engineer who likes owning a problem end to end, from designing
            the database schema to shipping the UI that sits on top of it, and everything in between.
            Over the last 2.5+ years he has built and scaled internal enterprise platforms used by
            thousands of people daily, optimized backend performance under real production load, and
            mentored other engineers through code review and day to day collaboration.
          </p>
          <p>
            Beyond his day job, he builds and runs his own saas products. He designed, built, and launched
            ShareMyTimer, a real time collaborative SaaS tool, from idea to paying customers,
            handling everything from the WebSocket architecture to AWS deployment to billing
            integration himself. He is equally comfortable writing a React component, tuning a
            MongoDB aggregation pipeline, configuring an EC2 instance, or building automation that
            removes manual work from a team&apos;s workflow, like the GitLab review agent he built
            that cut code review effort by 60%.
          </p>
          <p>
            He cares about writing code that is fast, maintainable, and genuinely useful to the people
            who touch it, whether that is an internal sales team relying on a CRM dashboard or a
            stranger paying for a SaaS product he built on his own.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
