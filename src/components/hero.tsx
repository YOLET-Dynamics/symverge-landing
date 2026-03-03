"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.translate = `${x}px ${y}px`;
        glow.style.opacity = "1";
      });
    };

    const onLeave = () => {
      glow.style.opacity = "0";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 pt-16 sm:px-6 sm:pt-20"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(58,143,101,0.12) 0%, transparent 60%)",
          borderRadius: "50%",
        }}
      />

      <div className="hero-spotlight" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2">
          <span className="hidden h-px w-8 bg-brand-green sm:inline-block" />
          <span className="text-xs font-medium uppercase tracking-widest text-brand-green sm:text-sm">
            Solutions engineered for you.
          </span>
          <span className="hidden h-px w-8 bg-brand-green sm:inline-block" />
        </div>

        <h1 className="animate-fade-in-up mt-6 text-3xl font-bold tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
          Your vision.
          <br />
          <span className="text-brand-green">Our engineering.</span>
        </h1>

        <p className="animate-fade-in-up-delay mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl">
          Most software is built to check a box. Ours is built to change the
          game. We craft custom platforms and EdTech tools that don&apos;t just
          work, they make people wonder why it wasn&apos;t always this
          easy.
        </p>

        <div className="animate-fade-in-up-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-brand-green px-8 text-base font-semibold text-white hover:bg-brand-gold hover:text-[#0a0a0a] sm:w-auto"
          >
            <a href="#contact">Let&apos;s Build Something</a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full border border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 sm:w-auto"
          >
            <a href="#services">See What We Do</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
