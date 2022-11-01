import { ReactNode } from 'react';

type IconLinkProps = {
  link: string;
  label: string;
  children: ReactNode;
};

export function IconLink({ link, label, children }: IconLinkProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={label}>
      <div className="relative grid place-items-center w-8 h-8 text-gray-600 text-xl rounded-full hover:text-white hover:bg-blue-400 active:text-white active:bg-blue-400 transition ease-in-out cursor-pointer">
        {children}
        <span className="sr-only">{label}</span>
      </div>
    </a>
  );
}
