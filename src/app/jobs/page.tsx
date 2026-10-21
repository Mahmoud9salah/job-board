import Link from "next/link";

const JobsPage = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Jobs Page</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          This is the jobs page of the Job Board App. Here you can find information about available positions, their requirements, and how to apply.    
        </p>    
        <p>Remote Positions Available</p>
        <Link href="/jobs/1" className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded">
          View Job 1 Details
        </Link>
        <br />
    </div>
    );
};

export default JobsPage;