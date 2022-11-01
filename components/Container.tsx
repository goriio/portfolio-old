import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-lg px-6 mx-auto">{children}</div>;
}
