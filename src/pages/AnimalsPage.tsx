import AnimalsTable from '@/components/AnimalsTable/AnimalsTable';
import GenericTable from '@/components/BaseTable/BaseTable';

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
    name: 'Banned',
    width: 'w-[100px]',
  },
  {
    name: 'Actions',
  },
];

const AnimalsPage = () => {
  return (
    <GenericTable headers={headers}>
      <AnimalsTable />
    </GenericTable>
  );
};

export default AnimalsPage;
