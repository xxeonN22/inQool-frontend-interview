/* eslint-disable @typescript-eslint/return-await */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UsersApi from '@/api/userApi';
import { UserForm } from '@/types/users';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => UsersApi.getAll(),
  });
};

export default useUsers;

export const useUserAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UserForm) => UsersApi.createSingle(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
};
