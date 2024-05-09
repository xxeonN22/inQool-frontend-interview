import Modal from '@/components/Modal/Modal';
import AnimalFormContent from '@/components/Forms/Animal/AnimalFormContent';
import EntityEditFormHeader from '@/components/Forms/EntityEditFormHeader';
import EntityEditFormFooter from '@/components/Forms/EntityEditFormFooter';
import { Animal } from '@/types/animals';
import useEditAnimal from '@/hooks/useEditAnimal';

interface EditAnimalProps {
  animal: Animal;
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const EditAnimal = ({ animal, trigger, triggerClass }: EditAnimalProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    control,
    errors,
    open,
    setOpen,
    isPending,
  } = useEditAnimal(animal);
  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <EntityEditFormHeader entityName={animal.name} />
        <AnimalFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <EntityEditFormFooter isPending={isPending} />
      </form>
    </Modal>
  );
};

export default EditAnimal;
