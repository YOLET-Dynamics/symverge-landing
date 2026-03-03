"use client";

import { useState, useEffect, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`font-logo tracking-[0.15em] text-white ${className}`}>
      SYM<span className="text-brand-green">VERGE</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openMenu = useCallback(() => {
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOpen(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setTimeout(() => setMounted(false), 300);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full justify-center px-3 transition-all duration-500 sm:px-4">
        <nav
          className={`flex w-full items-center justify-between transition-all duration-500 ${
            scrolled
              ? "mt-3 max-w-3xl rounded-full border border-white/10 bg-[#0a0a0a]/80 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-lg sm:mt-4 sm:px-6 sm:py-3.5"
              : "max-w-6xl px-4 py-4 sm:px-6 sm:py-5"
          }`}
        >
          <Logo className={`transition-all duration-500 ${scrolled ? "text-sm" : "text-lg sm:text-xl"}`} />

          <div className="hidden items-center gap-10 md:flex lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size={scrolled ? "sm" : "lg"}
              className="rounded-full bg-brand-green text-white transition-all duration-300 hover:bg-brand-gold hover:text-[#0a0a0a]"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <button
            onClick={openMenu}
            className="flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <Bars3Icon className="size-6" />
          </button>
        </nav>
      </header>

      {mounted && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-300 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          <div
            className={`relative z-10 mx-6 w-full max-w-sm rounded-2xl border border-white/10 bg-[#111] p-8 shadow-2xl transition-all duration-300 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="size-6" />
            </button>

            <Logo className="text-lg" />

            <nav className="mt-8 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-gray-300 transition-all hover:text-white"
                  style={{
                    transitionDelay: open ? `${75 + i * 50}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-8px)",
                    transitionDuration: "300ms",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div
              style={{
                transitionDelay: open ? "225ms" : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transitionDuration: "300ms",
                transitionProperty: "opacity, transform",
              }}
            >
              <Button
                asChild
                size="lg"
                className="mt-8 w-full rounded-full bg-brand-green text-white hover:bg-brand-gold hover:text-[#0a0a0a]"
              >
                <a href="#contact" onClick={closeMenu}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
