import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'outline';

type ButtonProps = {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base = `px-4 py-2 border border-blue-500 rounded font-semibold transition ease-in-out 
  hover:opacity-80 hover:-translate-y-0.5 
  active:opacity-90 active:translate-y-0 
  disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed`;

const variants: Record<Variant, string> = {
  default: 'bg-blue-500 text-white',
  outline: 'bg-transparent text-blue-500',
};

export function Button({
  variant = 'default',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      <div className="flex items-center justify-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </div>
    </button>
  );
}
