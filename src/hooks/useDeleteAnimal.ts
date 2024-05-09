import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import AnimalsApi from '@/api/animalApi';

const useDeleteAnimal = (animalId: string) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => AnimalsApi.deleteSingle(animalId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['animals'],
      });
      setOpen(false);
      toast({
        title: `Successfully removed animal`,
        variant: 'primary',
      });
    },
    onError: () => {
      toast({
        title: `Error while removing animal, try again later`,
        variant: 'destructive',
      });
    },
  });
  const { isPending, mutate } = mutation;

  return { open, setOpen, isPending, mutate };
};

export default useDeleteAnimal;
