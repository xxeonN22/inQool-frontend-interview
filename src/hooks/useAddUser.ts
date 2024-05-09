import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { UserForm } from '@/types/users';
import { FormValues, formSchema } from '@/validationSchemas/user';
import { useUserAdd } from '@/hooks/useUsers';

const useAddUser = () => {
  const [open, setOpen] = useState(false);
  const { mutate: addUser } = useUserAdd();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      gender: 'other',
    },
  });

  const onSubmit = (data: FormValues) => {
    const payload: UserForm = {
      name: data.name,
      gender: data.gender,
      banned: false,
    };
    setOpen(false);
    addUser(payload);
  };
  return {
    register,
    handleSubmit,
    control,
    errors,
    open,
    setOpen,
    onSubmit,
  };
};

export default useAddUser;
