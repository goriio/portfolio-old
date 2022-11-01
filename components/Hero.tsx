import { Button } from './Button';
import { Link } from 'react-scroll';
import { my } from '@/data';
import { BiDownload } from 'react-icons/bi';

export function Hero() {
  return (
    <section id="home" className="flex items-center w-full h-[60vh]">
      <div>
        <p className="text-lg">
          <span className="italic">Kamusta,</span> I am
        </p>
        <h1 className="mb-4 text-2xl sm:text-5xl text-gray-800 font-bold">
          {my.name}
        </h1>
        <p className="max-w-lg mb-8">{my.description}</p>
        <div className="flex items-center gap-4">
          <Link to="contact" smooth duration={400}>
            <Button variant="outline">Get in touch</Button>
          </Link>
          <a href={my.resume} target="_blank" rel="noreferrer">
            <Button icon={<BiDownload />}>Resume</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
