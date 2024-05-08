import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/user';

const useEditUser = (user: FormValues) => {
  const [open, setOpen] = useState(false);

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
    setOpen(false);
    console.log(data);
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
