import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { IconLink } from './IconLink';
import { Link } from 'react-scroll';
import { my } from '@/data';

function Nav() {
  return (
    <nav>
      <div className="hidden sm:flex items-center justify-center gap-6">
        {[
          {
            title: 'About Me',
            id: 'home',
          },
          {
            title: 'Projects',
            id: 'projects',
          },
          {
            title: 'Contact',
            id: 'contact',
          },
        ].map(({ title, id }) => {
          return (
            <Link
              to={id}
              key={id}
              smooth
              duration={400}
              offset={-16}
              className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition ease-in-out cursor-pointer"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <span className="text-gray-700 text-xl font-bold">GDSII</span>
      <div className="flex items-center gap-10">
        <Nav />
        <div className="flex items-center gap-2">
          <IconLink link={my.github} label="My GitHub">
            <FaGithubAlt />
          </IconLink>
          <IconLink link={my.linkedIn} label="My LinkedIn">
            <FaLinkedinIn />
          </IconLink>
        </div>
      </div>
    </header>
  );
}
