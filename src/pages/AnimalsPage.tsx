import TableDataAnimals from '@/components/Animals/TableDataAnimals';
import AnimalsTableLoader from '@/components/Animals/AnimalsTableLoader';
import BaseTable from '@/components/BaseTable/BaseTable';
import AddAnimal from '@/components/Forms/Animal/AddAnimal';
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
          addButton={
            <AddAnimal
              trigger="Add new animal"
              triggerClass="bg-primary text-primary-foreground rounded-md px-4 py-2"
            />
          }
        >
          <TableDataAnimals animals={data} />
        </BaseTable>
      ) : (
        <AnimalsTableLoader />
      )}
    </>
  );
};

export default AnimalsPage;
