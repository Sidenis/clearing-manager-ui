import SubmissionsList from "../components/SubmissionsList";
import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const submissions = gql`
    {
        submissions {
            id
            lob
            country
            insuredCompany
            address
            broker
            peril
            rules {
                status
                rule
            }
        }
    }
`;

export default () => (
    <>
        <h2>History</h2>
        <Query query={submissions} pollInterval={10000}>
            {({ loading, data }) => {
                if (loading) return 'Loading...';
                if (!data || !data.submissions) return 'No data';

                return <SubmissionsList submissions={data.submissions}/>
            }}
        </Query>
    </>
);
