"use client";

import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: "5+", label: "Years Building Software" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Education Focused" },
  { value: "MD", label: "Laurel, Maryland" },
];

export function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-secondary px-6 py-16 sm:py-20">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < stats.length - 1 ? "sm:border-r sm:border-border" : ""}`}
            >
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
