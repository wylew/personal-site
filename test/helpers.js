const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Wyatt Lewin',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Wyatt Lewin',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Wyatt Lewin',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Wyatt Lewin',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Wyatt Lewin',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
