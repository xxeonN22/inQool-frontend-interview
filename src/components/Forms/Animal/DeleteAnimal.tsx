import DeleteEntity from '@/components/Forms/DeleteEntity';
import useDeleteAnimal from '@/hooks/useDeleteAnimal';

interface DeleteAnimalProps {
  animalName: string;
  animalId: string;
  trigger: string;
  triggerClass?: string;
}

const DeleteAnimal = ({
  animalName,
  animalId,
  trigger,
  triggerClass,
}: DeleteAnimalProps) => {
  const { deleteAnimal, open, setOpen, isPending } = useDeleteAnimal(
    animalId,
    animalName
  );
  return (
    <DeleteEntity
      entityName={animalName}
      deleteEntity={deleteAnimal}
      trigger={trigger}
      triggerClass={triggerClass}
      open={open}
      setOpen={setOpen}
      isPending={isPending}
    />
  );
};

export default DeleteAnimal;
