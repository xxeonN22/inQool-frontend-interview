import Modal from '@/components/Modal/Modal';
import AddNewEntityHeader from '@/components/Forms/AddNewEntityHeader';
import AddNewEntityFooter from '@/components/Forms/AddNewEntityFooter';
import AnimalFormContent from '@/components/Forms/Animal/AnimalFormContent';
import useAddAnimal from '@/hooks/useAddAnimal';

interface AddAnimalProps {
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const AddAnimal = ({ trigger, triggerClass }: AddAnimalProps) => {
  const {
    open,
    setOpen,
    handleSubmit,
    control,
    onSubmit,
    register,
    errors,
    isPending,
  } = useAddAnimal();

  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddNewEntityHeader entityName="animal" />
        <AnimalFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <AddNewEntityFooter entityName="animal" isPending={isPending} />
      </form>
    </Modal>
  );
};

export default AddAnimal;
