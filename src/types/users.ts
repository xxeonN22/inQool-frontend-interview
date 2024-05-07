import { BaseModelId } from '@/types/common';

export type User = BaseModelId & {
  name: string;
  gender: string;
  banned: boolean;
};

export type AnimalForm = Omit<User, 'id'>;
