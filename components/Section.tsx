import { ReactNode, HTMLAttributes } from 'react';

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Section({
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className="mt-10 mb-20" {...props}>
      <h2 className="mb-2 text-xl md:text-3xl text-gray-800 font-bold">
        {title}
      </h2>
      {description && <p className="mb-8 text-gray-600">{description}</p>}
      {children}
    </section>
  );
}
