import { useContext } from 'react';
import { TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import AnimalRowButtons from '@/components/Animals/AnimalRowButtons';
import AnimalsTableLoader from '@/components/Animals/AnimalsTableLoader';
import AnimalRowData from '@/components/Animals/AnimalRowData';
import useAnimals from '@/hooks/useAnimals';
import useFilterAndSort from '@/hooks/useFilterAndSort';
import { Animal } from '@/types/animals';

const TableDataAnimals = () => {
  const filter = useContext(FilterContext);
  const { data: animals, isLoading } = useAnimals();
  const filteredAndSortedAnimals = useFilterAndSort<Animal>(animals, filter);

  return (
    <>
      {isLoading ? (
        <AnimalsTableLoader />
      ) : (
        filteredAndSortedAnimals.map((animal) => (
          <TableRow key={animal.id}>
            <AnimalRowData animal={animal} />
            <AnimalRowButtons animal={animal} />
          </TableRow>
        ))
      )}
    </>
  );
};

export default TableDataAnimals;
