"use client";

import {
  ArrowsRightLeftIcon,
  BoltIcon,
  UserGroupIcon,
  ChartBarIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    num: "01",
    title: "Workflow Design",
    description:
      "We map how your business actually runs, then redesign the process so it's faster, clearer, and built to scale — not held together by memory and habit.",
    icon: ArrowsRightLeftIcon,
  },
  {
    num: "02",
    title: "Automation",
    description:
      "Follow-ups, reminders, intake, forms, internal alerts — we turn the repetitive work that eats your day into systems that run themselves.",
    icon: BoltIcon,
  },
  {
    num: "03",
    title: "CRM & Customer Systems",
    description:
      "Leads, customers, appointments, and follow-ups in one organized place — so nothing slips through and everyone knows what happens next.",
    icon: UserGroupIcon,
  },
  {
    num: "04",
    title: "Dashboards & Reporting",
    description:
      "Clear dashboards that show what's actually happening in your business, so you can make decisions on facts instead of gut feel.",
    icon: ChartBarIcon,
  },
  {
    num: "05",
    title: "Custom Software",
    description:
      "When off-the-shelf tools don't fit, we architect and build bespoke web apps, internal tools, and integrations — engineered from scratch around how you work.",
    icon: CodeBracketIcon,
  },
  {
    num: "06",
    title: "EdTech Platforms",
    description:
      "Purpose-built platforms for schools and education programs: cut administrative chaos, lift engagement, and surface the insights that matter.",
    icon: AcademicCapIcon,
  },
];

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" aria-label="Our Services" className="px-5 py-16 sm:px-6 sm:py-32">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <span className="eyebrow">Services</span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          Everything it takes to{" "}
          <span className="text-brand-green">run smoother.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          From the first workflow map to the software that runs it — one team,
          end to end.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card
              key={service.title}
              className={`group relative border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand-green/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-brand-green/5 sm:p-8 ${
                inView ? "in-view" : ""
              } section-reveal`}
              style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
            >
              <span className="absolute top-4 right-4 text-3xl font-bold text-white/5 select-none sm:top-6 sm:right-6 sm:text-4xl">
                {service.num}
              </span>
              <CardHeader className="pb-3 sm:pb-4">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-brand-green/10 sm:size-12">
                  <service.icon className="size-5 text-brand-green sm:size-6" />
                </div>
                <CardTitle className="text-lg text-white sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-gray-400 sm:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
