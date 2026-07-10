"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Phone, X } from "lucide-react";
import { mainNav, quoteCta } from "@/data/navigation";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/** Full-screen mobile menu with large touch targets. */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Lock body scroll, trap focus, and move focus into the dialog while open.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const visible = [...focusables].filter((el) => el.offsetParent !== null);
      if (visible.length === 0) return;
      const first = visible[0];
      const last = visible[visible.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink lg:hidden"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-site flex h-[68px] shrink-0 items-center justify-between border-b border-line-dark">
            <span className="flex flex-col leading-none" aria-hidden="true">
              <span className="font-display text-[26px] font-bold tracking-tight text-paper uppercase">
                HisWay
              </span>
              <span className="font-mono text-[9px] tracking-[0.28em] text-muted-dark uppercase">
                Press or Print
              </span>
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-paper hover:text-accent"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-site flex-1 py-4">
            <ul className="divide-y divide-line-dark">
              {mainNav.map((item) => {
                if (item.label === "Services") {
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left font-display text-2xl font-semibold uppercase tracking-wide text-paper"
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-services"
                        onClick={() => setServicesOpen((o) => !o)}
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-6 w-6 text-muted-dark transition-transform duration-200",
                            servicesOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <div id="mobile-services" hidden={!servicesOpen}>
                        <ul className="border-t border-line-dark/60 pb-2">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block py-3 pl-4 text-lg text-muted-dark hover:text-paper"
                                onClick={onClose}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="block py-3 pl-4 text-lg font-medium text-accent hover:text-paper"
                              onClick={onClose}
                            >
                              All services
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-4 font-display text-2xl font-semibold uppercase tracking-wide text-paper hover:text-accent"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container-site shrink-0 border-t border-line-dark py-5">
            <Link
              href={quoteCta.href}
              className="flex h-13 w-full items-center justify-center bg-accent font-display text-lg font-semibold uppercase tracking-wide text-ink hover:bg-accent-deep hover:text-paper"
              onClick={onClose}
            >
              {quoteCta.label}
            </Link>
            <a
              href={company.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 py-2 font-mono text-sm text-muted-dark hover:text-paper"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
