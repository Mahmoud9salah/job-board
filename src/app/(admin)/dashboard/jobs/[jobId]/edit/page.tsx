type Props = {
    params: Promise<{ jobId: string }>;
};

function JobEditPage({ params }: Props) {
    return (
        <div>
            <h1>Job Edit Page</h1>
            {/* Add your content for editing a specific job here */}
        </div>
    );
}

export default JobEditPage;