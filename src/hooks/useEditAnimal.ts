import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/animal';
import { toast } from '@/components/ui/use-toast';
import { Animal, AnimalForm } from '@/types/animals';
import AnimalsApi from '@/api/animalApi';

const useEditAnimal = (animal: Animal) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: AnimalForm) =>
      AnimalsApi.updateSingle(animal.id, payload),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['animals'],
      });
      setOpen(false);
      toast({
        title: `Successfully edited user with name ${data.name}`,
        variant: 'primary',
      });
    },
    onError: () => {
      toast({
        title: `There was error while editing user, try again`,
        variant: 'destructive',
      });
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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
    mutation.mutate(payload);
  };

  const { isPending } = mutation;

  return {
    register,
    handleSubmit,
    control,
    errors,
    open,
    setOpen,
    onSubmit,
    isPending,
  };
};

export default useEditAnimal;
