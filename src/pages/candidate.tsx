import React from 'react';

import { Candidate } from '@/interfaces/candidates';
import Layout from '@/components/Layout';


// Dummy Data
const candidates: Candidate[] = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', status: 'Pending' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', status: 'Accepted' },
  { id: 3, name: 'Robert Brown', position: 'Designer', status: 'Rejected' },
  { id: 4, name: 'Alice Johnson', position: 'HR', status: 'Pending' },
];

// Card Component for displaying candidate details
interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (

    <div className="card">
      <h3>{candidate.name}</h3>
      <p><strong>Position:</strong> {candidate.position}</p>
      <p><strong>Status:</strong> {candidate.status}</p>
    </div>

  );
};

// Main Candidate Portal Component
const CandidatePortal: React.FC = () => {
  return (
    <div className="container">
      <h2>Candidate Portal</h2>

      <div className="card-container">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>

      <h3>Candidate List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.position}</td>
              <td>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidatePortal;
