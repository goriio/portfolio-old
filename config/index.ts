import { my } from '@/data';

export const site = {
  title: `${my.name + ' | ' ?? ''}Portfolio`,
  url: 'https://gdsii.me',
  favicon: '/favicon.ico',
  thumbnail: '/images/og-image.png',
  telegram: {
    token: process.env.TELEGRAM_TOKEN,
    accountId: process.env.TELEGRAM_ACCOUNT_ID,
  },
};
