import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'User name must be at least 3 characters long.' }),
  gender: z.enum(['male', 'female', 'other']),
});

export type FormValues = z.infer<typeof formSchema>;
