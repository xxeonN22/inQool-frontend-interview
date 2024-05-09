import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormValues, formSchema } from '@/validationSchemas/animal';
import { AnimalForm } from '@/types/animals';
import { useAnimalAdd } from '@/hooks/useAnimals';
import { toast } from '@/components/ui/use-toast';

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

  const onSubmit = async (data: FormValues) => {
    const payload: AnimalForm = {
      name: data.name,
      type: data.type,
      age: parseInt(data.age, 10),
    };
    addAnimal(payload, {
      onSuccess: () => {
        setOpen(false);
        toast({
          title: `Successfully added animal with name ${data.name}`,
          variant: 'primary',
        });
      },
      onError: () => {
        toast({
          title: `There was error while adding new animal, try again`,
          variant: 'primary',
        });
      },
    });
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
