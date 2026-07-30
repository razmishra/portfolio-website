import { Mail, MapPin, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-line pt-12 lg:scroll-mt-8 lg:pt-16"
    >
      <Reveal>
        <h2
          id="contact-heading"
          className="font-display text-section font-semibold tracking-tight text-ink"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-xl font-body text-body text-ink-soft">
          Open to roles where shipping systems and measurable outcomes matter. Reach out directly.
        </p>

        <address className="mt-8 not-italic">
          <ul className="space-y-4 font-mono text-data">
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
              <a
                href="mailto:rajneesh.work436@gmail.com"
                className="text-ink transition-colors hover:text-accent"
              >
                rajneesh.work436@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
              <a
                href="tel:+918983853993"
                className="text-ink transition-colors hover:text-accent"
              >
                +91 8983853993
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink">
              <MapPin size={16} className="shrink-0 text-accent" aria-hidden="true" />
              Noida, UP
            </li>
            <li className="flex items-center gap-3">
              <LinkedInIcon size={16} className="shrink-0 text-accent" />
              <a
                href="https://www.linkedin.com/in/rajneesh1m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent"
              >
                linkedin.com/in/rajneesh1m
              </a>
            </li>
            <li className="flex items-center gap-3">
              <GitHubIcon size={16} className="shrink-0 text-accent" />
              <a
                href="https://github.com/razmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent"
              >
                github.com/razmishra
              </a>
            </li>
          </ul>
        </address>

        <div className="mt-8">
          <a
            href={import.meta.env.VITE_RESUME_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded bg-accent px-5 py-2.5 font-body text-sm font-medium text-[#16213A] transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </Reveal>

      <footer className="mt-16 border-t border-line pt-6 pb-2">
        <p className="font-mono text-xs tracking-wider text-ink-soft">
          © {new Date().getFullYear()} Rajneesh Mishra
        </p>
      </footer>
    </section>
  )
}
