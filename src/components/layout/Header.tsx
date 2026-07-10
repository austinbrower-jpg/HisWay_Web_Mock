"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { mainNav, quoteCta } from "@/data/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";

const navLinkClass =
  "font-display text-[15px] font-semibold uppercase tracking-wide transition-colors duration-150";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const openedByHover = useRef(false);

  const closeServices = useCallback(() => setServicesOpen(false), []);

  // Close menus whenever the route changes (state adjustment during render).
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeServices();
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeServices();
        // Keep focus visible if it was inside the now-hidden menu.
        if (dropdownRef.current?.contains(document.activeElement)) {
          servicesButtonRef.current?.focus();
        }
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen, closeServices]);

  function scheduleClose() {
    closeTimer.current = window.setTimeout(closeServices, 150);
  }

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink">
      <div className="container-site flex h-[68px] items-center justify-between gap-6">
        <Link href="/" className="group flex flex-col leading-none" aria-label="HisWay Press or Print, home">
          <span className="font-display text-[26px] font-bold tracking-tight text-paper uppercase">
            HisWay
          </span>
          <span className="font-mono text-[9px] tracking-[0.28em] text-muted-dark uppercase group-hover:text-accent">
            Press or Print
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => {
              if (item.label === "Services") {
                return (
                  <li key={item.href}>
                    <div
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => {
                        cancelClose();
                        openedByHover.current = true;
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        openedByHover.current = false;
                        scheduleClose();
                      }}
                    >
                      <button
                        ref={servicesButtonRef}
                        type="button"
                        className={cn(
                          navLinkClass,
                          "flex items-center gap-1",
                          isActive("/services") ? "text-accent" : "text-paper/80 hover:text-paper",
                        )}
                        aria-expanded={servicesOpen}
                        aria-controls="services-menu"
                        onClick={() => {
                          // A click right after hover-open should not close the menu.
                          if (openedByHover.current) {
                            openedByHover.current = false;
                            setServicesOpen(true);
                          } else {
                            setServicesOpen((open) => !open);
                          }
                        }}
                      >
                        Services
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        id="services-menu"
                        className={cn(
                          "absolute left-1/2 top-full w-[560px] -translate-x-1/2 border border-line-dark bg-ink-2 p-2 shadow-2xl shadow-black/40 transition duration-150",
                          servicesOpen
                            ? "visible translate-y-3 opacity-100"
                            : "invisible translate-y-1 opacity-0",
                        )}
                      >
                        <ul className="grid grid-cols-2">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="group/item block px-4 py-3 hover:bg-ink-3"
                                tabIndex={servicesOpen ? 0 : -1}
                              >
                                <span className="font-display text-base font-semibold text-paper uppercase tracking-wide group-hover/item:text-accent">
                                  {service.name}
                                </span>
                                <span className="mt-0.5 block text-sm leading-snug text-muted-dark">
                                  {service.tagline}
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li className="col-span-2 mt-1 border-t border-line-dark">
                            <Link
                              href="/services"
                              className="flex items-center gap-2 px-4 py-3 font-display text-base font-semibold uppercase tracking-wide text-paper underline-offset-4 hover:underline hover:decoration-accent"
                              tabIndex={servicesOpen ? 0 : -1}
                            >
                              All services
                              <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      navLinkClass,
                      isActive(item.href) ? "text-accent" : "text-paper/80 hover:text-paper",
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.shortLabel ?? item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={quoteCta.href}
            className="hidden h-10 items-center bg-accent px-4 font-display text-[15px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-deep hover:text-paper active:translate-y-px sm:inline-flex"
          >
            {quoteCta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-paper hover:text-accent lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
