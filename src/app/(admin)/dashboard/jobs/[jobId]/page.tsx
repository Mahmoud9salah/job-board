type Props = {
    params: Promise<{ jobId: string }>;
};

function JobDetailPage({ params }: Props) {
    return (
        <div>
            <h1>Job Page</h1>
            {/* Add your content for displaying a specific job here */}
        </div>
    );
}

export default JobDetailPage;