import GenericTable from '@/components/BaseTable/BaseTable';
import UsersTable from '@/components/UsersTable/UsersTable';

const headers = [
  {
    name: 'ID',
    className: 'w-[50px] hidden sm:flex items-center',
  },
  {
    name: 'Name',
  },
  {
    name: 'Gender',
  },
  {
    name: 'Banned?',
    className: 'w-[100px]',
  },
  {
    name: 'Actions',
  },
];

const UsersPage = () => {
  return (
    <GenericTable headers={headers}>
      <UsersTable />
    </GenericTable>
  );
};

export default UsersPage;
