import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

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
            status
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
        <td>{submission.status}</td>
        <td><Link to={'/cards/' + submission.id} className='button float-right'>View</Link></td>
    </tr>
);
