import Link from "next/link";
import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

/** Standard light page top: optional breadcrumb, display headline, lead. */
export function PageHeader({ title, lead, crumbs, children }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-paper">
      <div className="container-site py-14 lg:py-16">
        <Reveal>
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                {crumbs.map((crumb) => (
                  <Fragment key={crumb.href}>
                    <li>
                      <Link href={crumb.href} className="transition-colors hover:text-accent-deep">
                        {crumb.label}
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                  </Fragment>
                ))}
                <li aria-current="page" className="text-ink">
                  {title}
                </li>
              </ol>
            </nav>
          )}
          <h1 className="heading-display max-w-4xl text-5xl text-ink sm:text-6xl">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
          )}
          {children}
        </Reveal>
      </div>
    </div>
  );
}
