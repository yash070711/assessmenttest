
export interface Candidate {
    id: number;
    name: string;
    position: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
  }
  