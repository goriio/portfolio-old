import clsx from 'clsx';
import { forwardRef, Ref, TextareaHTMLAttributes } from 'react';
import { base, ErrorMessage, Label, TextField, Wrapper } from './TextField';

type TextAreaProps = TextField & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef(
  (
    { label, error, className, ...props }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => (
    <Wrapper>
      <Label label={label} />
      <textarea
        ref={ref}
        id={label}
        className={clsx(base, 'h-28 resize-none', className)}
        {...props}
      />
      <ErrorMessage error={error} />
    </Wrapper>
  )
);

TextArea.displayName = 'TextArea';
