"use client";

import {
  CodeBracketIcon,
  AcademicCapIcon,
  ArrowRightIcon,
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
    title: "Custom Software Development",
    description:
      "Off-the-shelf never fits. We architect and build bespoke software, web apps, internal tools, complex integrations, engineered from scratch to match exactly how your organization thinks, operates, and grows. Clean code. Zero compromises.",
    icon: CodeBracketIcon,
  },
  {
    num: "02",
    title: "EdTech SaaS Platforms",
    description:
      "Education deserves better tools. Our SaaS platforms are purpose-built to cut through administrative chaos, spark student engagement, and surface insights that actually matter. Accessible anywhere, intuitive everywhere.",
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
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-green sm:text-sm">
          Services
        </span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          Two things. Done <span className="text-brand-green">exceptionally</span> well.
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          We keep our focus razor-sharp so you get depth, not breadth.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          {services.map((service, i) => (
            <Card
              key={service.title}
              className={`group relative border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand-green/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-brand-green/5 sm:p-8 ${
                inView ? "in-view" : ""
              } section-reveal`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
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
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed text-gray-400 sm:text-base">
                  {service.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm font-medium text-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRightIcon className="size-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
