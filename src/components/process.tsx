"use client";

import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    num: "01",
    title: "Diagnose",
    description: "We find what's actually slowing the business down.",
  },
  {
    num: "02",
    title: "Design",
    description: "We redesign the workflow and choose the right tools.",
  },
  {
    num: "03",
    title: "Automate",
    description: "We build the systems that cut out the manual work.",
  },
  {
    num: "04",
    title: "Optimize",
    description: "We track results and improve the system over time.",
  },
];

export function Process() {
  const { ref, inView } = useInView();

  return (
    <section
      id="process"
      aria-label="How we work"
      className="px-5 py-16 sm:px-6 sm:py-32"
    >
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <span className="eyebrow">How we work</span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          A simple path to a{" "}
          <span className="text-brand-green">smoother business.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          Four steps. Clear at every stage, with no surprises.
        </p>

        <ol className="relative mt-10 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-5 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-brand-green/40 via-brand-green/20 to-brand-green/40 lg:block"
          />
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`section-reveal relative ${inView ? "in-view" : ""}`}
              style={{ transitionDelay: inView ? `${i * 120}ms` : "0ms" }}
            >
              <div className="relative z-10 flex size-10 items-center justify-center rounded-xl border border-brand-green/30 bg-[#0a0a0a] text-sm font-semibold text-brand-green">
                {step.num}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400 sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
