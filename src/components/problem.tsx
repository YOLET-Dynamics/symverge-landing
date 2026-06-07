"use client";

import { useInView } from "@/hooks/use-in-view";

const signals = [
  {
    title: "Leads slip through the cracks",
    description:
      "Inquiries pile up and nobody follows up in time. The deal goes cold before anyone notices.",
  },
  {
    title: "Manual work eats the day",
    description:
      "Booking, intake, reminders, and data entry are done by hand — over and over, every single day.",
  },
  {
    title: "Information lives everywhere",
    description:
      "Customer details are scattered across inboxes, spreadsheets, and someone's memory. Nothing is in one place.",
  },
  {
    title: "You can't see what's happening",
    description:
      "No clear pipeline, no reporting, no numbers. Decisions get made on gut feel instead of facts.",
  },
];

export function Problem() {
  const { ref, inView } = useInView();

  return (
    <section
      id="problem"
      aria-label="The problem"
      className="px-5 py-16 sm:px-6 sm:py-32"
    >
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <span className="eyebrow">The problem</span>

        <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          A messy workflow quietly costs you{" "}
          <span className="text-brand-green">time, customers, and revenue.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          Most businesses don&apos;t have a software problem. They have an
          operations problem. These are the signs.
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:mt-12 sm:grid-cols-2">
          {signals.map((signal, i) => (
            <div
              key={signal.title}
              className={`section-reveal bg-[#0a0a0a]/40 p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8 ${
                inView ? "in-view" : ""
              }`}
              style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-sm font-semibold tabular-nums text-brand-green/60">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {signal.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {signal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
