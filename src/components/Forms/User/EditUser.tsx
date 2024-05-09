import Modal from '@/components/Modal/Modal';
import UserFormContent from '@/components/Forms/User/UserFormContent';
import EntityEditFormFooter from '@/components/Forms/EntityEditFormFooter';
import EntityEditFormHeader from '@/components/Forms/EntityEditFormHeader';
import { User } from '@/types/users';
import useEditUser from '@/hooks/useEditUser';

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
        <EntityEditFormHeader entityName={user.name} />
        <UserFormContent
          register={register}
          control={control}
          errors={errors}
        />
        <EntityEditFormFooter isSubmitting={isSubmitting} />
      </form>
    </Modal>
  );
};

export default EditUser;
