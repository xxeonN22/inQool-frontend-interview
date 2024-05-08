import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3),
  gender: z.enum(['male', 'female', 'other']),
});

export type FormValues = z.infer<typeof formSchema>;
