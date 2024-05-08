import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import EditUser from '@/components/Forms/EditUser/EditUser';
import { User } from '@/types/users';
import DeleteUser from '../Forms/DeleteUser/DeleteUser';
import { Button } from '../ui/button';

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  const filter = useContext(FilterContext);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  return (
    <>
      {filteredUsers.map((user) => (
        <TableRow key={user.id}>
          <TableCell className="px-0 sm:p-4 w-[40%]">{user.name}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[10%]">{user.gender}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[25%] text-center">
            {user.banned ? (
              <div className="flex gap-2">
                <Button size="sm">Remove ban</Button>
              </div>
            ) : (
              <Button size="sm">Give ban</Button>
            )}
          </TableCell>
          <TableCell className="px-0 sm:p-4 w-[25%] text-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 justify-center items-center">
              <EditUser
                user={user}
                trigger="Edit"
                triggerClass="bg-primary text-primary-foreground px-2 py-1 rounded-sm hover:bg-accent"
              />
              <DeleteUser
                userName={user.name}
                trigger="Delete"
                triggerClass="bg-destructive text-destructive-foreground px-2 py-1 rounded-sm hover:bg-red-700"
              />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UsersTable;
