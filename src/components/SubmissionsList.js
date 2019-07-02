import React from 'react';
import { Link } from "react-router-dom";
import { reduceState } from "../utils/submission";

export default ({ submissions }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>LOB</th>
                <th>PERIL</th>
                <th>BROKER</th>
                <th>COMPANY</th>
                <th>COUNTRY</th>
                <th>STATUS</th>
                <th style={{ textAlign: 'right', paddingRight: 25 }}>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            {submissions.map(SubmissionRow)}
            </tbody>
        </table>
    );
}

const SubmissionRow = (submission) => {
    const status = reduceState(submission.rules);

    return (
        <tr key={submission.id}>
            <td>{submission.id}</td>
            <td>{submission.lob}</td>
            <td>{submission.peril}</td>
            <td>{submission.broker}</td>
            <td>{submission.insuredCompany}</td>
            <td>{submission.country}</td>
            <td className={'status-' + status.toLowerCase()}>{status}</td>
            <td><Link to={'/cards/' + submission.id} className='button float-right'>Details</Link></td>
        </tr>
    );
};
