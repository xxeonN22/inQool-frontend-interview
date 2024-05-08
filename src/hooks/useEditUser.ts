import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/user';
import { User, UserForm } from '@/types/users';
import { useUserEdit } from './useUsers';

const useEditUser = (user: User) => {
  const [open, setOpen] = useState(false);
  const { mutate: editUser } = useUserEdit(user.id);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || '',
      gender: user?.gender || 'Other',
    },
  });

  const onSubmit = (data: FormValues) => {
    const payload: UserForm = {
      name: data.name,
      gender: data.gender,
      banned: user.banned,
    };
    editUser(payload);
    setOpen(false);
  };
  return {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    open,
    setOpen,
    onSubmit,
  };
};

export default useEditUser;
