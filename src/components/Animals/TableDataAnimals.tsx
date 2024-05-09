import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import AnimalRowButtons from '@/components/Animals/AnimalRowButtons';
import AnimalsTableLoader from '@/components/Animals/AnimalsTableLoader';
import useAnimals from '@/hooks/useAnimals';

const TableDataAnimals = () => {
  const { data: animals, isLoading } = useAnimals();
  const filter = useContext(FilterContext);

  const filteredAndSortedAnimals = useMemo(() => {
    if (!animals) {
      return [];
    }
    const filtered = animals.filter((animal) =>
      animal.name.toLowerCase().includes(filter.toLowerCase())
    );
    const sorted = filtered.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });

    return sorted;
  }, [animals, filter]);

  return (
    <>
      {isLoading ? (
        <AnimalsTableLoader />
      ) : (
        filteredAndSortedAnimals.map((animal) => (
          <TableRow key={animal.id}>
            <TableCell className="px-0 sm:p-4 w-[40%]">{animal.name}</TableCell>
            <TableCell className="px-0 sm:p-4 w-[25%]">{animal.type}</TableCell>
            <TableCell className="px-0 sm:p-4 w-[10%] text-center">
              {animal.age}
            </TableCell>
            <TableCell className="px-0 sm:p-4 w-[10%] text-center">
              <AnimalRowButtons animal={animal} />
            </TableCell>
          </TableRow>
        ))
      )}
    </>
  );
};

export default TableDataAnimals;
