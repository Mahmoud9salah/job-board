
import { Suspense } from "react";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

async function JobDetailContent({ params }: Props) {
    const { id } = await params;
    return (
        <div>
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Job Detail Page</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                This is the detail page for a specific job listing. Here you can find more information about the position, its responsibilities, and the application process.
            </p>
            <p>Job ID: {id}</p>
        </div>
    );
}

function JobDetailPage({ params }: Props) {
    return (
        <Suspense fallback={<p className="text-zinc-600 dark:text-zinc-400">Loading job details...</p>}>
            <JobDetailContent params={params} />
        </Suspense>
    );
}

export default JobDetailPage;