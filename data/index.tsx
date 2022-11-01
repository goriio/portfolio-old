import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiGithub,
} from 'react-icons/si';

export const my = {
  name: 'Gregorio Suapero II',
  description:
    'A passionate web developer. I am fond of building interactive web applications and learning new interesting things.',
  email: 'gdsuaperoii@duck.com',
  resume: 'https://github.com/goriio',
  github: 'https://github.com/goriio',
  linkedIn: 'https://www.linkedin.com/in/gregoriosuaperoii',
};

export const techStack = [
  {
    icon: <SiReact />,
    text: 'React',
  },
  {
    icon: <SiNextdotjs />,
    text: 'Next',
  },
  {
    icon: <SiTypescript />,
    text: 'TypeScript',
  },
  {
    icon: <SiNodedotjs />,
    text: 'Node',
  },
  {
    icon: <SiTailwindcss />,
    text: 'Tailwind',
  },
  {
    icon: <SiPostgresql />,
    text: 'PostgreSQL',
  },
  {
    icon: <SiGit />,
    text: 'Git',
  },
  {
    icon: <SiGithub />,
    text: 'GitHub',
  },
];

export const projects = [
  {
    title: 'unsentpup',
    description: '💬 Unsent messages of PUPians ',
    thumbnail: '/images/unsentpup-thumbnail.png',
    link: {
      code: 'https://github.com/goriio/unsentpup',
      demo: 'https://unsentpup.vercel.app',
    },
  },
  {
    title: 'mumu',
    description: '🎵 Music player.',
    thumbnail: '/images/mumu-thumbnail.png',
    link: {
      code: 'https://github.com/goriio/mumu',
      demo: 'https://mumu.vercel.app',
    },
  },
  {
    title: 'malaya',
    description: '📄 Post whatever you want. :D',
    thumbnail: '/images/malaya-thumbnail.png',
    link: {
      code: 'https://github.com/goriio/malaya',
      demo: 'https://malaya.vercel.app',
    },
  },
  {
    title: 'iksi',
    description: '🔗 Free custom url shortener ',
    thumbnail: '/images/iksi-thumbnail.png',
    link: {
      code: 'https://github.com/goriio/iksi',
      demo: 'https://iksi.ml',
    },
  },
];
