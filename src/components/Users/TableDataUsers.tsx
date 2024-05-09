import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import UserBanStatus from '@/components/Users/UserBanStatus';
import UserRowButtons from '@/components/Users/UserRowButtons';
import { User } from '@/types/users';

interface TableDataUsersProps {
  users: User[];
}

const TableDataUsers = ({ users }: TableDataUsersProps) => {
  const filter = useContext(FilterContext);

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    const sorted = filtered.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });

    return sorted;
  }, [users, filter]);

  return (
    <>
      {filteredAndSortedUsers.map((user) => (
        <TableRow key={user.id}>
          <TableCell className="px-0 sm:p-4 w-[40%]">{user.name}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[10%]">{user.gender}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[25%] text-center">
            <UserBanStatus user={user} />
          </TableCell>
          <TableCell className="px-0 sm:p-4 w-[25%] text-center">
            <UserRowButtons user={user} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableDataUsers;
