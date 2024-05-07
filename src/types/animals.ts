import { BaseModelId } from '@/types/common';

export type Animal = BaseModelId & {
  name: string;
  type: string;
  age: number;
};

export type AnimalForm = Omit<Animal, 'id'>;
