import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  
  res.status(200).json({ success: 'true' });
}