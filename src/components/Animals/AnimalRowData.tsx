import { TableCell } from '@/components/ui/table';
import { Animal } from '@/types/animals';

interface AnimalRowDataProps {
  animal: Animal;
}

const AnimalRowData = ({ animal }: AnimalRowDataProps) => {
  return (
    <>
      <TableCell className="px-0 sm:p-4 w-[40%]">{animal.name}</TableCell>
      <TableCell className="px-0 sm:p-4 w-[25%]">{animal.type}</TableCell>
      <TableCell className="px-0 sm:p-4 w-[10%] text-center">
        {animal.age}
      </TableCell>
    </>
  );
};

export default AnimalRowData;
