import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/animal';
import { Animal, AnimalForm } from '@/types/animals';
import { useAnimalEdit } from '@/hooks/useAnimals';

const useEditAnimal = (animal: Animal) => {
  const [open, setOpen] = useState(false);
  const { mutate: editAnimal } = useAnimalEdit(animal.id);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: animal?.name || '',
      type: animal?.type || 'other',
      age: animal?.age.toString(),
    },
  });

  const onSubmit = (data: FormValues) => {
    const payload: AnimalForm = {
      name: data.name,
      type: data.type,
      age: parseInt(data.age, 10),
    };
    editAnimal(payload);
    setOpen(false);
  };
  return {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    open,
    setOpen,
    onSubmit,
  };
};

export default useEditAnimal;
