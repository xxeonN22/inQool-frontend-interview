import Modal from '@/components/Modal/Modal';
import UserFormContent from '@/components/Forms/UserFormContent';
import useAddUser from '@/hooks/useAddUser';
import AddNewUserHeader from '@/components/Forms/AddUser/AddNewUserHeader';
import AddNewUserFooter from '@/components/Forms/AddUser/AddNewUserFooter';

interface AddNewUserProps {
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const AddNewUser = ({ trigger, triggerClass }: AddNewUserProps) => {
  const { open, setOpen, handleSubmit, onSubmit, register, control, errors } =
    useAddUser();

  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddNewUserHeader />
        <UserFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <AddNewUserFooter />
      </form>
    </Modal>
  );
};

export default AddNewUser;
