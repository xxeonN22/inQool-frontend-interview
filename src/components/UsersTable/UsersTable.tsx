import React, { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import users from '@/components/UsersTable/mockData';
import EditUser from '@/components/Forms/EditUser/EditUser';

const UsersTable = () => {
  const filter = useContext(FilterContext);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <TableRow>
      {filteredUsers.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <TableCell className="hidden sm:block">{user.id}</TableCell>
            <TableCell className="text-center">{user.name}</TableCell>
            <TableCell className="text-center">{user.gender}</TableCell>
            <TableCell className="text-center">
              {user.banned && <Badge>{user.banned ? 'BANNED' : ''}</Badge>}
            </TableCell>
            <TableCell className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <EditUser user={user} trigger="Edit" />
            </TableCell>
          </React.Fragment>
        );
      })}
    </TableRow>
  );
};

export default UsersTable;
