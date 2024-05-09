import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormValues, formSchema } from '@/validationSchemas/animal';
import { AnimalForm } from '@/types/animals';
import { toast } from '@/components/ui/use-toast';
import AnimalsApi from '@/api/animalApi';

const useAddAnimal = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: AnimalForm) => AnimalsApi.createSingle(payload),
    onSuccess: async (data) => {
      queryClient.invalidateQueries({
        queryKey: ['animals'],
      });
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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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

export default useAddAnimal;
