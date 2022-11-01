import { Button } from './Button';
import { Section } from './Section';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { site } from '@/config';
import { useState } from 'react';

const ContactMessage = z.object({
  name: z.string().min(1, { message: 'Name is required' }).trim(),
  email: z.string().min(1, { message: 'Email is required' }).email(),
  message: z.string().min(1, { message: 'Message is required' }).trim(),
});

type ContactMessage = z.infer<typeof ContactMessage>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMessage>({
    resolver: zodResolver(ContactMessage),
  });
  const [sending, setSending] = useState(false);

  async function onSubmit(message: ContactMessage) {
    setSending(true);

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      body: JSON.stringify(message),
    });

    setSending(false);

    const data = await response.json();

    if (!data.ok) {
      return toast('Something went wrong. 😢');
    }

    toast('Your message was sent. 😊');
    reset();
  }

  return (
    <Section title="Get in touch" description="Send me a message." id="contact">
      <div className="flex flex-col sm:flex-row gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-xl w-full mx-auto"
        >
          <TextField
            label="Name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register('name')}
          />
          <TextField
            label="Email"
            placeholder="you@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
          <TextArea
            label="Message"
            placeholder="Your message..."
            error={errors.message?.message}
            {...register('message')}
          />
          <Button type="submit" disabled={sending}>
            Send
          </Button>
        </form>
      </div>
    </Section>
  );
}
