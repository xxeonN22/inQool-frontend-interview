import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import { Button } from '@/components/ui/button';
import DeleteAnimal from '@/components/Forms/DeleteAnimal/DeleteAnimal';
import { Animal } from '@/types/animals';

interface AnimalsTableProps {
  animals: Animal[];
}

const AnimalsTable = ({ animals }: AnimalsTableProps) => {
  const filter = useContext(FilterContext);

  const filteredAndSortedAnimals = useMemo(() => {
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
      {filteredAndSortedAnimals.map((animal) => (
        <TableRow key={animal.id}>
          <TableCell className="px-0 sm:p-4 w-[40%]">{animal.name}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[25%]">{animal.type}</TableCell>
          <TableCell className="px-0 sm:p-4 w-[10%] text-center">
            {animal.age}
          </TableCell>
          <TableCell className="px-0 sm:p-4 w-[10%] text-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 justify-center items-center">
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-primary"
              >
                Edit
              </Button>
              <DeleteAnimal
                animalName={animal.name}
                animalId={animal.id}
                trigger="Delete"
                triggerClass="bg-destructive text-destructive-foreground px-2 py-1 rounded-sm hover:bg-red-700"
              />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default AnimalsTable;
