import { Suspense } from "react";

type Props = {
    params: Promise<{ applicationId: string }>;
};

async function ApplicationDetailContent({ params }: Props) {
    const { applicationId } = await params;
    console.log("Application ID: ", applicationId);
    return (
        <div>
            <h1>Application Detail Page</h1>
            {/* Add your content for displaying a specific application here */}
        </div>
    );
}

function ApplicationDetailPage({ params }: Props) {
    return (
        <Suspense fallback={<p>Loading application details...</p>}>
            <ApplicationDetailContent params={params} />
        </Suspense>
    );
}

export default ApplicationDetailPage;