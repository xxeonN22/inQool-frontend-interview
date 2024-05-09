import EditAnimal from '@/components/Forms/Animal/EditAnimal';
import DeleteAnimal from '@/components/Forms/Animal/DeleteAnimal';
import { TableCell } from '@/components/ui/table';
import { Animal } from '@/types/animals';

interface AnimalRowButtonsProps {
  animal: Animal;
}

const AnimalRowButtons = ({ animal }: AnimalRowButtonsProps) => {
  return (
    <TableCell className="px-0 sm:p-4 w-[10%] text-center">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 justify-center items-center">
        <EditAnimal
          animal={animal}
          trigger="Edit"
          triggerClass="bg-accent text-accent-foreground px-2 py-1 rounded-sm hover:bg-primary"
        />
        <DeleteAnimal
          animalName={animal.name}
          animalId={animal.id}
          trigger="Delete"
          triggerClass="bg-destructive text-destructive-foreground px-2 py-1 rounded-sm hover:bg-red-700"
        />
      </div>
    </TableCell>
  );
};

export default AnimalRowButtons;
