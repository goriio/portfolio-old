import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react';

export const base = 'px-4 py-2 rounded bg-transparent border border-slate-300';

export function Wrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

export function Label({ label }: { label: string }) {
  return (
    <label htmlFor={label} className="mb-1 text-sm text-gray-600">
      {label}
    </label>
  );
}

export function ErrorMessage({ error }: { error?: string }) {
  return <p className="mt-2 text-xs text-red-600">{error ?? ''}</p>;
}

export type TextField = {
  label: string;
  error?: string;
  className?: string;
};

type TextFieldProps = TextField & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef(
  (
    { label, error, className, type = 'text', ...props }: TextFieldProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Wrapper>
      <Label label={label} />
      <input
        ref={ref}
        type={type}
        id={label}
        className={clsx(base, className)}
        {...props}
      />
      <ErrorMessage error={error} />
    </Wrapper>
  )
);

TextField.displayName = 'TextField';
