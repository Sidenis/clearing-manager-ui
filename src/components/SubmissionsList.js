import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const submissions = gql`
    {
        submissions {
            id
            name
            state
        }
    }
`;

export default () => {
    return (
        <Query query={submissions}>
            {({ loading, data }) => {
                if (loading) return 'Loading...';
                if (!data || !data.submissions) return 'No data';

                return (
                    <ul>
                        {data.submissions.map(SubmissionRow)}
                    </ul>
                );
            }}
        </Query>
    );
}

const SubmissionRow = () => <li>submission</li>;
