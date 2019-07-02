import React from "react";
import SubmissionForm from "../components/SubmissionForm";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const addSubmission = gql`
    mutation AddSubmission($submission: SubmissionInput) {
        submission(submission: $submission){
            id
        }
    }
`;

export default () => {
    const redirectTo = ({id}) => window.location.href = '/cards/' + id;

    return (
        <>
            <h2>Create a submission</h2>
            <Mutation mutation={addSubmission} update={(_, { data: { submission } }) => redirectTo(submission)}>
                {(add) =>
                    <SubmissionForm
                        onSubmit={(form) => add({ variables: { submission: form } })}/>
                }
            </Mutation>
        </>
    )
};
