import { Section } from './Section';
import { IconLink } from './IconLink';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data';
import Image from 'next/image';

export function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(({ title, description, thumbnail, link }) => {
          return (
            <div key={title}>
              <div className="relative mb-2 bg-slate-200 rounded overflow-hidden shadow aspect-video">
                <Image
                  src={thumbnail}
                  blurDataURL={thumbnail}
                  alt={`${title}'s thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="hover:scale-95 transition ease-in-out"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-gray-800 font-semibold">{title}</h3>
                  <p className="text-sm">{description}</p>
                </div>
                <div className="flex items-center justify-between gap-2 text-xl">
                  <IconLink link={link.code} label="Source code">
                    <FaGithub />
                  </IconLink>
                  <IconLink link={link.demo} label="Demo">
                    <FaExternalLinkAlt />
                  </IconLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
