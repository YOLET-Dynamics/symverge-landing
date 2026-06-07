"use client";

import { useInView } from "@/hooks/use-in-view";

const outcomes = [
  "Stop losing leads to slow follow-up",
  "Turn repetitive work into automated systems",
  "Keep every customer, lead, and task in one place",
];

export function Solution() {
  const { ref, inView } = useInView();

  return (
    <section
      id="solution"
      aria-label="What we do"
      className="px-5 py-16 sm:px-6 sm:py-32"
    >
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">What we do</span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
              We don&apos;t just write code.
              <br />
              We <span className="text-brand-green">design the workflow.</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-400 sm:mt-8 sm:space-y-6 sm:text-lg">
              <p>
                SYMVERGE turns messy operations into simple systems. We map how
                your business actually works, redesign the parts that slow you
                down, automate the repetitive ones, and build the software to
                hold it all together.
              </p>
              <p>
                Small team. High standards. Every engagement ships clean, runs
                fast, and solves a real problem — not an imaginary one.
              </p>
            </div>

            <ul className="mt-7 space-y-3 sm:mt-8">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                    <svg
                      viewBox="0 0 12 12"
                      className="size-3 text-brand-green"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.2 5 8.7l4.5-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300 sm:text-base">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
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
