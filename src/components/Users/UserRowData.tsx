import { TableCell } from '@/components/ui/table';
import UserBanStatus from '@/components/Users/UserBanStatus';
import { User } from '@/types/users';

interface UserRowDataProps {
  user: User;
}

const UserRowData = ({ user }: UserRowDataProps) => {
  return (
    <>
      <TableCell className="px-0 sm:p-4 w-[40%]">{user.name}</TableCell>
      <TableCell className="px-0 sm:p-4 w-[10%]">{user.gender}</TableCell>
      <TableCell className="px-0 sm:p-4 w-[25%] text-center">
        <UserBanStatus user={user} />
      </TableCell>
    </>
  );
};

export default UserRowData;
