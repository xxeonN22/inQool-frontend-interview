import { useContext } from 'react';
import { TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import UserRowButtons from '@/components/Users/UserRowButtons';
import UsersTableLoader from '@/components/Users/UsersTableLoader';
import UserRowData from '@/components/Users/UserRowData';
import useFilterAndSort from '@/hooks/useFilterAndSort';
import useUsers from '@/hooks/useUsers';
import { User } from '@/types/users';

const TableDataUsers = () => {
  const filter = useContext(FilterContext);
  const { data: users, isLoading } = useUsers();
  const filteredAndSortedUsers = useFilterAndSort<User>(users, filter);

  return (
    <>
      {isLoading ? (
        <UsersTableLoader />
      ) : (
        filteredAndSortedUsers.map((user) => (
          <TableRow key={user.id}>
            <UserRowData user={user} />
            <UserRowButtons user={user} />
          </TableRow>
        ))
      )}
    </>
  );
};

export default TableDataUsers;
