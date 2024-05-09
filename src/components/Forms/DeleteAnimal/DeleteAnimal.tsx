import DeleteEntity from '@/components/Forms/DeleteEntity';
import { useAnimalDelete } from '@/hooks/useAnimals';

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
  const { mutateAsync: deleteAnimal } = useAnimalDelete(animalId);
  return (
    <DeleteEntity
      entityName={animalName}
      deleteEntity={deleteAnimal}
      trigger={trigger}
      triggerClass={triggerClass}
    />
  );
};

export default DeleteAnimal;
