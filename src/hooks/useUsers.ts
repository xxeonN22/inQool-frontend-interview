/* eslint-disable @typescript-eslint/return-await */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UsersApi from '../api/userApi';
import { UserForm } from '@/types/users';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => UsersApi.getAll(),
  });
};

export default useUsers;

export const useUserDelete = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await UsersApi.deleteSingle(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      queryClient.invalidateQueries({
        queryKey: ['user', id],
      });
    },
  });
};

export const useUserEdit = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UserForm) =>
      await UsersApi.updateSingle(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      queryClient.invalidateQueries({
        queryKey: ['user', id],
      });
    },
  });
};
