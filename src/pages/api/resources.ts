import type { NextApiRequest, NextApiResponse } from 'next';

// Simulated in-memory access control (would typically use a database)
let accessControl: Record<string, string[]> = {
  '/candidate': ['admin', 'user'],
  '/candidate/expertise': ['admin'],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url, roles } = req.body;

    if (!url || !roles || !Array.isArray(roles)) {
      return res.status(400).json({ message: 'Invalid data format' });
    }

    accessControl[url] = roles;
    return res.status(200).json({ message: 'Resource added', accessControl });
  }

  res.status(405).json({ message: 'Method not allowed' });
}

export const getAccessControl = () => accessControl;
