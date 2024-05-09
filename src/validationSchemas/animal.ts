import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Animal name must be at least 3 characters long.' }),
  type: z.enum(['cat', 'dog', 'other']),
  age: z.string().regex(/^\d+$/, {
    message: 'Age must be positive number, 0 included',
  }),
});

export type FormValues = z.infer<typeof formSchema>;
