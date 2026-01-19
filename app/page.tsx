"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const featured = [
  {
    title: "Tbibek fi Jibek: Building Practical AI for Healthcare Access",
    desc: "How Radiant designed modular, deployable AI systems for healthcare orientation and accessibility.",
    href: "/blog/tbibek-fi-jibek-practical-healthcare-ai",
    meta: "Healthcare AI • Systems",
  },
  {
    title: "Tunisian Sign Language Recognition Under Real Constraints",
    desc: "A lightweight keypoints-first pipeline designed for accessibility-driven healthcare contexts.",
    href: "/blog/tunisian-sign-language-recognition",
    meta: "Vision • Accessibility",
  },
  {
    title: "A Multi-Agent Approach to Dermatology Assistance",
    desc: "Vision + retrieval + structured reasoning agents for grounded dermatological support.",
    href: "/blog/multi-agent-dermatology-assistant",
    meta: "Agents • RAG",
  },
  {
    title: "Radiant Philosophy: From Research to Deployable Systems",
    desc: "Why we value evaluation, traceability, and engineering reality over demo-only intelligence.",
    href: "/blog/radiant-philosophy-research-to-systems",
    meta: "Culture • Engineering",
  },
];

const principles = [
  {
    title: "Grounded outputs",
    desc: "Retrieval-first behavior and structured reasoning to reduce hallucinations and improve trust.",
  },
  {
    title: "Modular intelligence",
    desc: "Independent modules with clear interfaces that can evolve safely and deploy progressively.",
  },
  {
    title: "Operational thinking",
    desc: "Evaluation, failure modes, and constraints treated as first-class design requirements.",
  },
];

const socials = [
 ];

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-16">
      {/* HERO */}
      <section className="pt-12 md:pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30 backdrop-blur shadow-sm">
          {/* background accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-slate-200/60 dark:bg-slate-800/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-slate-200/50 dark:bg-slate-800/25 blur-3xl" />
            <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
              <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:28px_28px]" />
            </div>
          </div>

          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                  Radiant Group
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  Applied multimodal systems
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                  Practical AI for healthcare, built as systems.
                </h1>

                <p className="mt-4 text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  We build modular, deployable pipelines that combine
                  multimodality, retrieval, and evaluation. This blog documents
                  our design choices, trade-offs, and failures as we turn
                  research into usable tools.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-sm font-medium"
                  >
                    Read the blog
                    <ArrowRight className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-sm font-medium"
                  >
                    Featured posts
                    <ArrowRight className="w-4 h-4 opacity-80" />
                  </a>

                  <div className="flex flex-wrap gap-2">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-sm font-medium"
                      >
                        <Icon className="w-4 h-4" />
                        {label.toLowerCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* right side preview card */}
              <div className="w-full lg:w-[420px]">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    Current focus
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Tbibek fi Jibek
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    A unified application made of independent AI modules:
                    accessibility (TunSL), multimodal assistance, and grounded
                    decision support.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      "Multimodal",
                      "Agents + RAG",
                      "Low-resource data",
                      "Deployment-minded",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-950/10 text-center"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Link
                      href="/blog/tbibek-fi-jibek-practical-healthcare-ai"
                      className="group inline-flex w-full items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                    >
                      Read the overview
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* principles */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-6"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section id="featured" className="mt-10 md:mt-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Featured posts
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              The best entry points into our work and engineering decisions.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline underline-offset-4"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30 backdrop-blur p-6 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {post.meta}
                </span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="mt-3 text-base md:text-lg font-semibold text-slate-900 dark:text-white text-balance">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 md:mt-14">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30 backdrop-blur p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Read, reuse, and build on our work.
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We write with enough detail to make experiments reproducible:
                system design, evaluation approaches, and implementation notes.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-sm font-semibold"
            >
              Go to blog
              <ArrowRight className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>
    
  {/* Additional Team Members */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Card — Anas Nguira */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
        <div className={`bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQHxZSPeJ7Jzqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701391880201?e=1770249600&v=beta&t=zWoFauphxptYozjgQm_eZ-sNYZ3W10glLFGU598eSjE')] w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full`} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Anas Nguira
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/anas-nguira-416232296/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>

    {/* Card — Aziza Neffati */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
        
        <div className={`bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQFg0IGjctEofw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677197774995?e=1770249600&v=beta&t=mUJwg1ERFRTIjqx3TkcOGhaiDfK-PsBLRJtIrO4PfVA')] w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full`} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Aziza Neffati
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/aziza-neffati-718b71184/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>

    {/* Card — Amal Benamor */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
        
        <div className={`bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4E03AQEzeD18ULsBFw/profile-displayphoto-shrink_800_800/B4EZSyd1LeGYAg-/0/1738160953073?e=1770249600&v=beta&t=_b7otQ-rqks6VLZolYPWT9fFW9dVTEPnrT6tpqMGLH4')] w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full`} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Amal Benamor
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/amal-benamor-607423316/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>
    {/* Yassine Hemissi Card */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
        
        <div className={`bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQGxwPg7lsG-Yw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724264751472?e=1770249600&v=beta&t=bPApzPCXDI9B4mVoBtmpUOrdHh5oZRaT-wSCgtp5QU8')] w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full`} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Mohamed Yassine Hemissi 
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/mohamed-yassine-hemissi/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>


    {/* Card — Dorra Ben El Amri Bettaieb */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
        
        <div className={`bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4E35AQHbRWbddK_sKQ/profile-framedphoto-shrink_800_800/B4EZZh3jwMHcAg-/0/1745398676804?e=1769443200&v=beta&t=2Ik-i4uPLQk4MsjgXqAYB_3XMwHGdCPnjzF5h5YNUL0')] w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full`} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Dorra Ben El Amri Bettaieb
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/dorra-ben-el-amri-bettaieb-b90191292/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs font-medium"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>

    {/* Card — Amin Mnif */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
       <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Amin Mnif
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <span className="text-xs text-slate-600 dark:text-slate-400">
          (LinkedIn not available)
        </span>
      </div>
    </div>

    {/* Card — Moura Hriz */}
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/20 p-5">
      <div className="flex items-center gap-4">
         <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Moura Hriz
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Team Contributor
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <span className="text-xs text-slate-600 dark:text-slate-400">
          (LinkedIn not available)
        </span>
      </div>
    </div>
  </div>

      </main>
  );
}

