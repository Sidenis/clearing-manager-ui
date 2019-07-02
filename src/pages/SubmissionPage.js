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
    const redirectTo = ({id}) => window.location.href = '/card/' + id;
    const stubAddress = {
        long: 12312,
        lat: 2384293499
    };

    return (
        <>
            <h2>Create a submission</h2>
            <Mutation mutation={addSubmission} update={(_, { data: { submission } }) => redirectTo(submission)}>
                {(add) =>
                    <SubmissionForm
                        onSubmit={(form) => add({ variables: { submission: { ...form, address: stubAddress } } })}/>
                }
            </Mutation>
        </>
    )
};
