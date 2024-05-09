import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormValues, formSchema } from '@/validationSchemas/animal';
import { AnimalForm } from '@/types/animals';
import { useAnimalAdd } from '@/hooks/useAnimals';

const useAddAnimal = () => {
  const [open, setOpen] = useState(false);
  const { mutate: addAnimal } = useAnimalAdd();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      type: 'other',
      age: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    const payload: AnimalForm = {
      name: data.name,
      type: data.type,
      age: parseInt(data.age, 10),
    };
    setOpen(false);
    addAnimal(payload);
  };
  return {
    register,
    handleSubmit,
    control,
    errors,
    open,
    setOpen,
    onSubmit,
    isSubmitting,
  };
};

export default useAddAnimal;
