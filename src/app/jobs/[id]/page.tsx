
type Props = {
    params: Promise<{
        id: string;
    }>;
};

const JobDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    console.log("Job ID:", id); // Log the job ID to the console for debugging
    return (
        <div>
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Job Detail Page</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                This is the detail page for a specific job listing. Here you can find more information about the position, its responsibilities, and the application process.
            </p>
        </div>
    );
};

export default JobDetailPage;