import { BaseModelId } from '@/types/common';

export type Animal = BaseModelId & {
  name: string;
  type: 'cat' | 'dog' | 'other';
  age: number;
};

export type AnimalForm = Omit<Animal, 'id'>;
