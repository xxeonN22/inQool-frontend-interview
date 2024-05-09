import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AnimalsApi from '@/api/animalApi';

export const useAnimals = () => {
  return useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAll(),
  });
};

export const useAnimalDelete = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await AnimalsApi.deleteSingle(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['animals'],
      });
    },
  });
};
