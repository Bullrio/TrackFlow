import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'No URL provided' });
  return res.status(200).json({ url });
}