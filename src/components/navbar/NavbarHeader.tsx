
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";

const NAV = [
  { href: "/jobs", label: "Find jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/employer", label: "For employers" },
];

const brutalButton =
  "inline-flex items-center justify-center gap-2 border-2 border-foreground font-bold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

const primaryButton =
  `${brutalButton} bg-primary text-primary-foreground shadow-brutal hover:-translate-y-0.5`;

const outlineButton =
  `${brutalButton} bg-paper text-foreground shadow-brutal-sm hover:bg-primary`;

function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HIRE/BLOCK home"
      className="flex shrink-0 items-center gap-2"
    >
      <span
        className={`grid size-9 place-items-center border-2 border-foreground bg-primary font-display text-lg ${
          invert ? "text-foreground" : "shadow-brutal-sm"
        }`}
      >
        W
      </span>

      <span className="font-display text-xl tracking-tight">
        Wazifa
      </span>
    </Link>
  );
}

export default function NavbarHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-foreground bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        {/* <nav aria-label="Main navigation" className="hidden items-center md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold uppercase transition-colors ${
                  active
                    ? "bg-foreground text-background"
                    : "hover:bg-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav> */}

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            className="text-sm font-bold uppercase underline-offset-4 hover:underline"
          >
            Home
          </Link>

          <Link href="/jobs" className={`${primaryButton} px-4 py-2 text-sm`}>
            Browse jobs
          </Link>
        </div>

        <button
          type="button"
          className={`${outlineButton} size-10 md:hidden`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t-2 border-foreground bg-paper md:hidden"
        >
          {/* {NAV.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-b-2 border-foreground px-5 py-4 font-display text-2xl uppercase ${
                  active ? "bg-primary" : "hover:bg-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })} */}

          <div className="grid grid-cols-2 gap-3 p-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`${outlineButton} px-3 py-3`}
            >
              Home
            </Link>

            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className={`${primaryButton} px-3 py-3`}
            >
              Browse jobs
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
