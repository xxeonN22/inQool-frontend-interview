import { BaseModelId } from '@/types/common';

export type User = BaseModelId & {
  name: string;
  gender: 'male' | 'female' | 'other';
  banned: boolean;
};

export type UserForm = Omit<User, 'id'>;
