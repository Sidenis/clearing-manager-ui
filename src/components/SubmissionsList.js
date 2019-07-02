import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { reduceState } from "../utils/submission";

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

export default () => {
    return (
        <Query query={submissions}>
            {({ loading, data }) => {
                if (loading) return 'Loading...';
                if (!data || !data.submissions) return 'No data';

                return (
                    <table>
                        <thead>
                        <tr>
                           <th>ID</th>
                           <th>LOB</th>
                           <th>PERIL</th>
                           <th>BROKER</th>
                           <th>COUNTRY</th>
                           <th>STATUS</th>
                           <th>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.submissions.map(SubmissionRow)}
                        </tbody>
                    </table>
                );
            }}
        </Query>
    );
}

const SubmissionRow = (submission) => (
    <tr key={submission.id}>
        <td>{submission.id}</td>
        <td>{submission.lob}</td>
        <td>{submission.peril}</td>
        <td>{submission.broker}</td>
        <td>{submission.country}</td>
        <td>{reduceState(submission.rules)}</td>
        <td><Link to={'/cards/' + submission.id} className='button float-right'>View</Link></td>
    </tr>
);
