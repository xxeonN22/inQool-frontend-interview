import BaseTable from '@/components/BaseTable/BaseTable';
import UsersTable from '@/components/UsersTable/UsersTable';
import UsersTableLoader from '@/components/UsersTable/UsersTableLoader';
import useUsers from '@/hooks/useUsers';
import { Button } from '@/components/ui/button';

const headers = [
  {
    id: 2,
    name: 'Name',
    className: 'px-0 sm:p-4 w-[40%]',
  },
  {
    id: 3,
    name: 'Gender',
    className: 'px-0 sm:p-4 w-[10%]',
  },
  {
    id: 4,
    name: 'Ban status',
    className: 'px-0 sm:p-4 w-[25%] text-center',
  },
  {
    id: 5,
    name: 'Actions',
    className: 'px-0 sm:p-4 w-[25%] text-center',
  },
];

const UsersPage = () => {
  const { data, isLoading } = useUsers();
  return (
    <>
      {data && !isLoading ? (
        <BaseTable
          headers={headers}
          searchPlaceholder="Search by name..."
          addButton={<Button>Add new user</Button>}
        >
          <UsersTable users={data} />
        </BaseTable>
      ) : (
        <UsersTableLoader />
      )}
    </>
  );
};

export default UsersPage;
