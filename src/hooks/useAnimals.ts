/* eslint-disable @typescript-eslint/return-await */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AnimalsApi from '@/api/animalApi';
import { AnimalForm } from '@/types/animals';

export const useAnimals = () => {
  return useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAll(),
  });
};

export const useAnimalAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: AnimalForm) =>
      await AnimalsApi.createSingle(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['animals'],
      });
    },
  });
};
