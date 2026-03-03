"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useInView } from "@/hooks/use-in-view";

export function CtaBanner() {
  const { ref, inView } = useInView();

  return (
    <section className="px-5 py-16 sm:px-6 sm:py-32">
      <div
        ref={ref}
        className={`section-reveal relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-brand-green/30 bg-gradient-to-br from-[#1b3d2f] via-[#1b3d2f] to-[#0d2118] px-6 py-14 sm:rounded-3xl sm:px-16 sm:py-28 ${inView ? "in-view" : ""}`}
      >
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        <div className="relative z-10 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            Let&apos;s go
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-2xl font-bold tracking-tight text-white sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to build something that actually{" "}
            <span className="text-brand-gold/90">matters?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base text-white/60 sm:mt-6 sm:text-lg">
            Stop settling for software that slows you down.
            Let&apos;s talk about what&apos;s possible.
          </p>

          <div className="mt-8 flex items-center justify-center sm:mt-10">
            <Button
              asChild
              size="lg"
              className="group w-full rounded-full bg-white px-8 text-base font-semibold text-[#1b3d2f] transition-all hover:bg-brand-gold hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-brand-gold/20 sm:w-auto"
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-2">
                Start a Conversation
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
