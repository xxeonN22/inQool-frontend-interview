import { User } from '@/types/users';
import DeleteUser from '@/components/Forms/User/DeleteUser';
import EditUser from '@/components/Forms/User/EditUser';
import { TableCell } from '@/components/ui/table';

interface UserRowButtonsProps {
  user: User;
}

const UserRowButtons = ({ user }: UserRowButtonsProps) => {
  return (
    <TableCell className="px-0 sm:p-4 w-[25%] text-center">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 justify-center items-center">
        <EditUser
          user={user}
          trigger="Edit"
          triggerClass="bg-accent text-accent-foreground px-2 py-1 rounded-sm hover:bg-primary"
        />
        <DeleteUser
          userId={user.id}
          userName={user.name}
          trigger="Delete"
          triggerClass="bg-destructive text-destructive-foreground px-2 py-1 rounded-sm hover:bg-red-700"
        />
      </div>
    </TableCell>
  );
};

export default UserRowButtons;
