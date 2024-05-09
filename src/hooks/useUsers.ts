/* eslint-disable @typescript-eslint/return-await */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UsersApi from '@/api/userApi';
import { UserForm } from '@/types/users';
import { toast } from '@/components/ui/use-toast';

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
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      toast({
        title: `Successfully removed user`,
        variant: 'primary',
      });
    },
    onError: () => {
      toast({
        title: `Error while removing user, try again later`,
        variant: 'destructive',
      });
    },
  });
};

export const useUserEdit = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UserForm) => UsersApi.updateSingle(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
};

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
