import BaseTable from '@/components/BaseTable/BaseTable';
import TableDataUsers from '@/components/Users/TableDataUsers';
import UsersTableLoader from '@/components/Users/UsersTableLoader';
import useUsers from '@/hooks/useUsers';
import AddUser from '@/components/Forms/User/AddUser';

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
          addButton={
            <AddUser
              trigger="Add new user"
              triggerClass="bg-primary text-primary-foreground rounded-md px-4 py-2"
            />
          }
        >
          <TableDataUsers users={data} />
        </BaseTable>
      ) : (
        <UsersTableLoader />
      )}
    </>
  );
};

export default UsersPage;
