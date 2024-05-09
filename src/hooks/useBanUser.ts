import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User, UserForm } from '@/types/users';
import { useToast } from '@/components/ui/use-toast';
import UsersApi from '@/api/userApi';

const useBanUser = (user: User) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: UserForm) => UsersApi.updateSingle(user.id, payload),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      if (data.banned) {
        toast({
          title: `Successfully banned user with name ${user.name}`,
          variant: 'primary',
        });
      } else {
        toast({
          title: `Successfully removed ban for user with name ${user.name}`,
          variant: 'primary',
        });
      }
    },
    onError: () => {
      toast({
        title: `There was error while editing user, try again`,
        variant: 'destructive',
      });
    },
  });

  const handleEdit = async () => {
    const payload: UserForm = {
      name: user.name,
      gender: user.gender,
      banned: !user.banned,
    };
    mutation.mutate(payload);
  };

  const { isPending } = mutation;

  return { handleEdit, isPending };
};

export default useBanUser;
