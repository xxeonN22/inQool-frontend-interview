import AnimalsTable from '@/components/AnimalsTable/AnimalsTable';
import AnimalsTableLoader from '@/components/AnimalsTable/AnimalsTableLoader';
import BaseTable from '@/components/BaseTable/BaseTable';
import { Button } from '@/components/ui/button';
import { useAnimals } from '@/hooks/useAnimals';

const headers = [
  {
    id: 1,
    name: 'Name',
    className: 'px-0 sm:p-4 w-[40%]',
  },
  {
    id: 2,
    name: 'Type',
    className: 'px-0 sm:p-4 w-[25%]',
  },
  {
    id: 3,
    name: 'Age',
    className: 'px-0 sm:p-4 w-[10%] text-center',
  },
  {
    id: 4,
    name: 'Actions',
    className: 'px-0 sm:p-4 w-[25%] text-center',
  },
];

const AnimalsPage = () => {
  const { data, isLoading } = useAnimals();
  return (
    <>
      {data && !isLoading ? (
        <BaseTable
          headers={headers}
          searchPlaceholder="Search by name..."
          addButton={<Button>Add new animal</Button>}
        >
          <AnimalsTable animals={data} />
        </BaseTable>
      ) : (
        <AnimalsTableLoader />
      )}
    </>
  );
};

export default AnimalsPage;
