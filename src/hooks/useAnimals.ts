/* eslint-disable @typescript-eslint/return-await */
import { useQuery } from '@tanstack/react-query';
import AnimalsApi from '@/api/animalApi';

const useAnimals = () => {
  return useQuery({
    queryKey: ['animals'],
    queryFn: () => AnimalsApi.getAll(),
  });
};

export default useAnimals;
