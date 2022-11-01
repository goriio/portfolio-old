import { techStack } from '@/data';
import { Section } from './Section';

export function Skills() {
  

  return (
    <Section
      title="Skills"
      description="These are the tools and technologies I use for development."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {techStack.map(({ icon, text }, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-gray-700"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-lg font-semibold">{text}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
