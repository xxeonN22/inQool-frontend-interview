import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import UsersApi from '@/api/userApi';

const useDeleteUser = (userId: string) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => UsersApi.deleteSingle(userId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      setOpen(false);
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
  const { isPending, mutate } = mutation;

  return { open, setOpen, isPending, mutate };
};

export default useDeleteUser;
