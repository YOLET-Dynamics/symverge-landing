import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          <div>
            <h3 className="font-logo text-base tracking-[0.15em] text-white sm:text-lg">
              SYM<span className="text-brand-green">VERGE</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Solutions engineered for you. Seriously.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">
              Navigation
            </h4>
            <nav className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link w-fit text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-gray-500" />
                <span className="text-sm text-gray-400">
                  Laurel, Maryland
                  <br />
                  United States
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="size-4 shrink-0 text-gray-500" />
                <a
                  href="tel:+15712356218"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  (571) 235-6218
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="size-4 shrink-0 text-gray-500" />
                <a
                  href="mailto:contact@symverge.tech"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  contact@symverge.tech
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center gap-3 text-xs text-gray-500 sm:flex-row sm:justify-between sm:text-sm">
            <p>&copy; 2026 SYMVERGE Platforms LLC. All rights reserved.</p>
            <p>
              Built by{" "}
              <a
                href="https://yoletent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-brand-green"
              >
                YOLET Labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
