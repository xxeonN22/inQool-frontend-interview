import Modal from '@/components/Modal/Modal';
import UserFormContent from '@/components/Forms/User/UserFormContent';
import useAddUser from '@/hooks/useAddUser';
import AddNewEntityHeader from '@/components/Forms/AddNewEntityHeader';
import AddNewEntityFooter from '@/components/Forms/AddNewEntityFooter';

interface AddNewUserProps {
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const AddUser = ({ trigger, triggerClass }: AddNewUserProps) => {
  const {
    open,
    setOpen,
    handleSubmit,
    onSubmit,
    register,
    control,
    errors,
    isPending,
  } = useAddUser();

  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddNewEntityHeader entityName="user" />
        <UserFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <AddNewEntityFooter entityName="user" isPending={isPending} />
      </form>
    </Modal>
  );
};

export default AddUser;
