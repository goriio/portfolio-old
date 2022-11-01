import { site } from '@/config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = JSON.parse(req.body);

  const response = await fetch(
    `https://api.telegram.org/bot${
      site.telegram.token
    }/sendAnimation?${new URLSearchParams({
      chat_id: site.telegram.accountId as string,
      animation: 'https://tenor.com/9Tf4.gif',
      caption: `FROM: ${name} (${email})\n\nMESSAGE: ${message}`,
    })}`
  );

  res.send(await response.json());
}
