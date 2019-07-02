import React from "react";
import SubmissionForm from "../components/SubmissionForm";

export default () => {
    const addSubmission = (form) => console.log(form);

    return (
        <>
            <h2>Create a submission</h2>
            <SubmissionForm onSubmit={addSubmission}/>
        </>
    )
};
