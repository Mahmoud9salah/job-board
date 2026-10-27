
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Menu,
  X,
  Bell,
  ExternalLink,
} from "lucide-react";

const ADMIN_NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/jobs", label: "Jobs", icon: Users },
  
];

function AdminSidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center justify-between border-b-2 border-sidebar-border px-5">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center border-2 border-sidebar-foreground bg-sidebar-primary font-display text-lg text-sidebar-primary-foreground">
            W
          </span>

          <span className="font-display text-lg tracking-tight">
            Wazifa
          </span>
        </Link>
      </div>

      <div className="border-b-2 border-sidebar-border px-5 py-4">
        <p className="label-mono text-sidebar-foreground/60">Workspace</p>
        <p className="mt-1 font-bold">Administration</p>
      </div>

      <nav
        aria-label="Admin navigation"
        className="flex-1 space-y-1 overflow-y-auto p-3"
      >
        {ADMIN_NAV.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 border-2 px-3 py-3 text-sm font-bold transition-colors ${
                active
                  ? "border-sidebar-primary bg-sidebar-primary text-sidebar-primary-foreground"
                  : "border-transparent hover:border-sidebar-border hover:bg-sidebar-accent"
              }`}
            >
              <Icon className="size-5 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t-2 border-sidebar-border p-3">
        <Link
          href="/"
          className="flex items-center gap-3 border-2 border-transparent px-3 py-3 text-sm font-bold hover:border-sidebar-border hover:bg-sidebar-accent"
        >
          <ExternalLink className="size-5" />
          View website
        </Link>

        <div className="mt-3 border-t border-sidebar-border px-3 pt-3">
          <p className="label-mono text-sidebar-foreground/60">
            Admin Console
          </p>
          <p className="mt-1 text-xs text-sidebar-foreground/70">
            Wazifa · 2026
          </p>
        </div>
      </div>
    </aside>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <div className="sticky top-0 hidden h-screen w-64 shrink-0 border-r-[3px] border-foreground lg:block">
          <AdminSidebar />
        </div>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close navigation"
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />

            <div className="relative h-full w-[min(18rem,85vw)] border-r-[3px] border-foreground">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center border-2 border-sidebar-foreground bg-sidebar text-sidebar-foreground"
              >
                <X className="size-5" />
              </button>

              <AdminSidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        )}

        {/* Main workspace */}
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b-[3px] border-foreground bg-paper px-4 md:px-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open admin navigation"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                className="grid size-10 place-items-center border-2 border-foreground bg-paper shadow-brutal-sm lg:hidden"
              >
                <Menu className="size-5" />
              </button>

              <div>
                <p className="label-mono text-muted-foreground">
                  Wazifa Admin
                </p>
                <p className="text-sm font-bold">Admin Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifications"
                className="relative grid size-10 place-items-center border-2 border-foreground bg-paper shadow-brutal-sm hover:bg-primary"
              >
                <Bell className="size-5" />
                <span className="absolute right-1 top-1 size-2 border border-foreground bg-primary" />
              </button>

              <div className="hidden items-center gap-2 border-2 border-foreground bg-primary px-3 py-2 sm:flex">
                <span className="grid size-7 place-items-center border-2 border-foreground bg-paper text-xs font-bold">
                  A
                </span>
                <span className="text-sm font-bold">Administrator</span>
              </div>
            </div>
          </header>

          <main className="min-w-0 p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
