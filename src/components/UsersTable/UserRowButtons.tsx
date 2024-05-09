import { User } from '@/types/users';
import DeleteUser from '@/components/Forms/User/DeleteUser';
import EditUser from '@/components/Forms/User/EditUser';

interface UserRowButtonsProps {
  user: User;
}

const UserRowButtons = ({ user }: UserRowButtonsProps) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 justify-center items-center">
      <EditUser
        user={user}
        trigger="Edit"
        triggerClass="bg-primary text-primary-foreground px-2 py-1 rounded-sm hover:bg-accent"
      />
      <DeleteUser
        userId={user.id}
        userName={user.name}
        trigger="Delete"
        triggerClass="bg-destructive text-destructive-foreground px-2 py-1 rounded-sm hover:bg-red-700"
      />
    </div>
  );
};

export default UserRowButtons;
