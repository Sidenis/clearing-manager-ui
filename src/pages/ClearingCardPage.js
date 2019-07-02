import React from 'react';
import { Query } from "react-apollo";
import ClearingCard from "../components/ClearingCard";
import { gql } from "apollo-boost";

const query = gql`
    query ($id: ID!){
        submission(id: $id) {
            id
            lob
            peril
            broker
            address
            country
            insuredCompany
            status
        }
    }
`;

export default ({ match }) => (
    <Query query={query} variables={{ id: match.props.id }}>
        {({ data }) => <ClearingCard card={data.submission}/>}
    </Query>
);
