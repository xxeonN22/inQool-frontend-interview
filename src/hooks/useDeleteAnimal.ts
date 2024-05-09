import { useEffect, useState } from 'react';
import { useAnimalDelete } from './useAnimals';
import { useToast } from '@/components/ui/use-toast';

const useDeleteAnimal = (animalId: string, animalName: string) => {
  const {
    mutate: deleteAnimal,
    isSuccess,
    isError,
    isPending,
  } = useAnimalDelete(animalId);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: `Successfully removed animal with name ${animalName}`,
        variant: 'primary',
      });
      setOpen(false);
    } else if (isError) {
      toast({
        title: `There was an error while removing the animal, try again`,
        variant: 'destructive',
      });
    }
  }, [isSuccess, isError, toast, isPending, animalName]);
  return { deleteAnimal, open, setOpen, isPending };
};

export default useDeleteAnimal;
