import React, { useContext, useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { FilterContext } from '@/components/BaseTable/BaseTable';
import animals from '@/components/AnimalsTable/mockData';

const AnimalsTable = () => {
  const filter = useContext(FilterContext);

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) =>
      animal.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [animals, filter]);

  return (
    <TableRow>
      {filteredAnimals.map((animal) => {
        return (
          <React.Fragment key={animal.id}>
            <TableCell className="hidden sm:block">{animal.id}</TableCell>
            <TableCell className="text-center">{animal.name}</TableCell>
            <TableCell className="text-center">{animal.type}</TableCell>
            <TableCell className="text-center">{animal.age}</TableCell>
            <TableCell className="flex flex-col sm:flex-row justify-center items-center gap-3" />
          </React.Fragment>
        );
      })}
    </TableRow>
  );
};

export default AnimalsTable;
