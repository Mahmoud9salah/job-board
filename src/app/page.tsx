import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Welcome to Job Board App Mr. Mahmoud
        </h3>
        <Link href="/jobs" className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded">
          View Available Jobs
        </Link>
      </main>
    </div>
  );
}
