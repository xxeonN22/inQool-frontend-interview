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
  const { open, setOpen, isPending, mutate } = useDeleteAnimal(animalId);
  return (
    <DeleteEntity
      entityName={animalName}
      deleteEntity={mutate}
      trigger={trigger}
      triggerClass={triggerClass}
      open={open}
      setOpen={setOpen}
      isPending={isPending}
    />
  );
};

export default DeleteAnimal;
