import Link from "next/link";



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

export default function NavbarFooter() {
  return (
    <footer className="mt-24 border-t-[3px] border-foreground bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Logo invert />

          <p className="mt-4 max-w-sm text-sm text-background/70">
            The job board for people who build things. Hand-reviewed listings,
            real salaries, zero ghosting.
          </p>
        </div>

        <div>
          <p className="label-mono mb-3 text-primary">Candidates</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/jobs" className="hover:text-primary">Browse jobs</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
          </ul>
        </div>

        {/* <div>
          <p className="label-mono mb-3 text-primary">Employers</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/employer/jobs/new" className="hover:text-primary">Post a job</Link></li>
            <li><Link href="/employer" className="hover:text-primary">Employer dashboard</Link></li>
          </ul>
        </div> */}
      </div>

      <div className="border-t-2 border-background/20 px-4 py-4 text-center label-mono text-background/60">
        © 2026 Wazifa — Built square.
      </div>
    </footer>
  );
}