import React from 'react';
import { Query } from "react-apollo";
import ClearingCard from "../components/ClearingCard";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";

const query = gql`
    query ($id: ID!) {
        getSubmission(id: $id) {
            id
            lob
            peril
            broker
            address
            country
            insuredCompany
            rules {
                status
                rule
            }
        }
    }
`;

export default withRouter(({ match }) => (
    <Query query={query} variables={{ id: match.params.id }} pollInterval={5000}>
        {({ data, loading, error }) => {
            if (error) return error;
            if (loading ) return 'Loading...';

            return <ClearingCard card={data.getSubmission}/>;
        }}
    </Query>
));
