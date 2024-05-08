import { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import animals from '@/components/AnimalsTable/mockData';
import { Button } from '../ui/button';

const AnimalsTable = () => {
  const filter = useContext(FilterContext);

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) =>
      animal.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <>
      {filteredAnimals.map((animal) => (
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
              <Button
                size="sm"
                className="bg-destructive text-destructive-foreground hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default AnimalsTable;
