import { Suspense } from "react";

type Props = {
    params: Promise<{ applicationId: string }>;
};

 function ApplicationReviewPage({ params }: Props) {
    return (
        <div>
            <h1>Application Review Page</h1>
            <Suspense fallback={<p>Loading application review details...</p>}>
                <ApplicationReviewContent params={params} />
            </Suspense>
        </div>
    );
}

export default ApplicationReviewPage;

async function ApplicationReviewContent({ params }: Props) {
    const { applicationId } = await params;
    console.log("Application ID for review: ", applicationId);
    return (
        <div>
            
            <p>Application ID: {applicationId}</p>
            {/* Add your content for reviewing a specific application here */}
        </div>
    );
}