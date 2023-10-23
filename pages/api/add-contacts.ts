import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const { name, email, message } = JSON.parse(request.body)
    if (!name || !email || !message) throw new Error('name, email, and message are required');
    await sql`
      INSERT INTO Contacts (Name, Email, Message) VALUES (${name}, ${email}, ${message});
    `;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  return response.status(200).json({ message: "contact inserted." });
}