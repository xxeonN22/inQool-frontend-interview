import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import UserBanStatus from '@/components/Users/UserBanStatus';
import UserRowButtons from '@/components/Users/UserRowButtons';
import useUsers from '@/hooks/useUsers';
import UsersTableLoader from './UsersTableLoader';

const TableDataUsers = () => {
  const { data: users, isLoading } = useUsers();
  const filter = useContext(FilterContext);

  const filteredAndSortedUsers = useMemo(() => {
    if (!users) {
      return [];
    }
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
      {isLoading ? (
        <UsersTableLoader />
      ) : (
        filteredAndSortedUsers.map((user) => (
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
        ))
      )}
    </>
  );
};

export default TableDataUsers;
