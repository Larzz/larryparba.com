import Link from "next/link";

import { SectionCard } from "@/components/site/section-card";
import { SiteShell } from "@/components/site/site-shell";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { coreCompetencies, experience, profile } from "@/lib/resume-data";

import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <SiteShell>
      <section className="space-y-6 border-b  border-zinc-200 pb-10 dark:border-zinc-800">
    

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {profile.name}
		  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Web Application Developer
        </p>
        </h1>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {profile.title}
        </p>
        <p className="max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200">
          {profile.summary}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex text-[#181717] transition-opacity hover:opacity-80 dark:text-zinc-100"
            >
              <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex text-[#0078d4] transition-opacity hover:opacity-80"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex text-[#0a66c2] transition-opacity hover:opacity-80"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
            </Link>
            <Link
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex text-black transition-opacity hover:opacity-80 dark:text-zinc-100"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-7 w-7" />
            </Link>
          </div>
          <div className="flex flex-wrap pt-1">
            <button
              type="button"
              className="inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500 dark:text-zinc-100 dark:decoration-zinc-700"
            >
              <Link href="/contact">Hire me</Link>
            </button>
          </div>

        </div>

      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <SectionCard title="Core Competencies">
          <ul className="space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
            {coreCompetencies.slice(0, 5).map((competency) => (
              <li key={competency}>- {competency}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Recent Role">
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              {experience[0].role} at {experience[0].company}
            </p>
            <p>
              {experience[0].location} | {experience[0].period}
            </p>
            <p className="leading-6">{experience[0].summary}</p>
            <Link
              href="/experience"
              className="inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500 dark:text-zinc-100 dark:decoration-zinc-700"
            >
              View full experience
            </Link>
          </div>
        </SectionCard>
        <div className="flex text-center">
          <ThemeToggle />
        </div>
      </section>
    </SiteShell>
  );
}
