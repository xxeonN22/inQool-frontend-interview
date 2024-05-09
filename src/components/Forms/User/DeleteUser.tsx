import DeleteEntity from '@/components/Forms/DeleteEntity';
import useDeleteUser from '@/hooks/useDeleteUser';

interface DeleteUserProps {
  userName: string;
  userId: string;
  trigger: string;
  triggerClass?: string;
}

const DeleteUser = ({
  userName,
  userId,
  trigger,
  triggerClass,
}: DeleteUserProps) => {
  const { open, setOpen, isPending, mutate } = useDeleteUser(userId);

  return (
    <DeleteEntity
      entityName={userName}
      deleteEntity={mutate}
      trigger={trigger}
      triggerClass={triggerClass}
      open={open}
      setOpen={setOpen}
      isPending={isPending}
    />
  );
};

export default DeleteUser;
