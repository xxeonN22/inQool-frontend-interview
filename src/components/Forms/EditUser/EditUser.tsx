import Modal from '@/components/Modal/Modal';
import UserFormContent from '@/components/Forms/UserFormContent';
import EditUserHeader from '@/components/Forms/EditUser/EditUserHeader';
import EditUserFooter from '@/components/Forms/EditUser/EditUserFooter';
import useEditUser from '@/hooks/useEditUser';
import { User } from '@/types/users';

interface EditUserProps {
  user: User;
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const EditUser = ({ user, trigger, triggerClass }: EditUserProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    control,
    errors,
    open,
    setOpen,
    isSubmitting,
  } = useEditUser(user);

  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <EditUserHeader userName={user.name} />
        <UserFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <EditUserFooter isSubmitting={isSubmitting} />
      </form>
    </Modal>
  );
};

export default EditUser;
