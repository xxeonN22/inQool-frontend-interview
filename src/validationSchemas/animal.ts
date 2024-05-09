import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3),
  type: z.enum(['cat', 'dog', 'other']),
  age: z.string().regex(/^\d+$/),
});

export type FormValues = z.infer<typeof formSchema>;
