import DeleteEntity from '@/components/Forms/DeleteEntity';
import { useUserDelete } from '@/hooks/useUsers';

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
  const { mutateAsync: deleteUser } = useUserDelete(userId);
  return (
    <DeleteEntity
      entityName={userName}
      deleteEntity={deleteUser}
      trigger={trigger}
      triggerClass={triggerClass}
    />
  );
};

export default DeleteUser;
