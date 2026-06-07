"use client";

import {
  AcademicCapIcon,
  HeartIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "@/hooks/use-in-view";

const industries = [
  {
    title: "Education",
    description: "Schools, programs, and learning platforms.",
    icon: AcademicCapIcon,
  },
  {
    title: "Clinics & Healthcare",
    description: "Practices managing patients and intake.",
    icon: HeartIcon,
  },
  {
    title: "Agencies",
    description: "Teams juggling clients and deliverables.",
    icon: MegaphoneIcon,
  },
  {
    title: "Service Businesses",
    description: "Bookings, follow-ups, and recurring work.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Operations Teams",
    description: "Back-office work that runs on manual steps.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Startups",
    description: "Small teams that need to scale without chaos.",
    icon: RocketLaunchIcon,
  },
];

export function Industries() {
  const { ref, inView } = useInView();

  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="px-5 py-16 sm:px-6 sm:py-32"
    >
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <span className="eyebrow">Industries</span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          Built for any business with a{" "}
          <span className="text-brand-green">workflow to fix.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          We started in education. The same systems work anywhere operations get
          messy.
        </p>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`section-reveal group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand-green/30 hover:bg-white/[0.05] ${
                inView ? "in-view" : ""
              }`}
              style={{ transitionDelay: inView ? `${i * 70}ms` : "0ms" }}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                <industry.icon className="size-5 text-brand-green" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
