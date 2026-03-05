"use client";

import { useInView } from "@/hooks/use-in-view";

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" aria-label="About Us" className="px-5 py-16 sm:px-6 sm:py-32">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green sm:text-sm">
              About Us
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
              We don&apos;t just write code.
              <br />
              We <span className="text-brand-green">solve problems.</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-400 sm:mt-8 sm:space-y-6 sm:text-lg">
              <p>
                SYMVERGE Platforms builds software and SaaS products for the
                education sector. We care about the details. The
                architecture, the UX, the things most teams skip.
              </p>
              <p>
                Small team. Big standards. Every project ships clean, runs fast,
                and solves a real problem, not an imaginary one.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto h-80 w-80">
              <div className="absolute inset-0 rounded-3xl border border-white/5 bg-white/[0.02]" />
              <div className="absolute top-6 right-6 bottom-6 left-6 rounded-2xl border border-brand-green/10 bg-brand-green/[0.02]" />
              <div className="absolute top-12 right-12 bottom-12 left-12 rounded-xl border border-white/10 bg-white/[0.03] shadow-sm" />
              <div className="absolute top-[72px] right-16 left-16 space-y-3">
                <div className="h-2 w-3/4 rounded-full bg-brand-green/20" />
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-5/6 rounded-full bg-white/10" />
                <div className="mt-5 h-8 w-24 rounded-md bg-brand-green/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
