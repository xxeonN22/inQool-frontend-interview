import { User, UserForm } from '@/types/users';
import { useToast } from '@/components/ui/use-toast';
import { useUserEdit } from '@/hooks/useUsers';

const useBanUser = (user: User) => {
  const { mutate: editUser } = useUserEdit(user.id);
  const { toast } = useToast();

  const handleEdit = async () => {
    const payload: UserForm = {
      name: user.name,
      gender: user.gender,
      banned: !user.banned,
    };
    editUser(payload, {
      onSuccess: () => {
        toast({
          title: user.banned
            ? `Successfully removed ban for user ${user.name}`
            : `${user.name} was successfully banned`,
          variant: 'primary',
        });
      },
      onError: () => {
        toast({
          title: `There was error while setting new ban status for user, try again`,
          variant: 'destructive',
        });
      },
    });
  };

  return handleEdit;
};

export default useBanUser;
