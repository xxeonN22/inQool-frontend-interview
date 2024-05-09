import { useEffect, useState } from 'react';
import { useUserDelete } from './useUsers';
import { useToast } from '@/components/ui/use-toast';

const useDeleteUser = (userId: string, userName: string) => {
  const {
    mutate: deleteUser,
    isSuccess,
    isError,
    isPending,
  } = useUserDelete(userId);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: `Successfully removed user with name ${userName}`,
        variant: 'primary',
      });
      setOpen(false);
    } else if (isError) {
      toast({
        title: `There was an error while removing the user, try again`,
        variant: 'destructive',
      });
    }
  }, [isSuccess, isError, toast, isPending, userName]);
  return { deleteUser, open, setOpen, isPending };
};

export default useDeleteUser;
