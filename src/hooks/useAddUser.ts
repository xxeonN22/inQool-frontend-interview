import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { UserForm } from '@/types/users';
import { FormValues, formSchema } from '@/validationSchemas/user';
import { useUserAdd } from '@/hooks/useUsers';
import { useToast } from '@/components/ui/use-toast';

const useAddUser = () => {
  const [open, setOpen] = useState(false);
  const { mutate: addUser } = useUserAdd();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      gender: 'other',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const payload: UserForm = {
      name: data.name,
      gender: data.gender,
      banned: false,
    };

    addUser(payload, {
      onSuccess: () => {
        setOpen(false);
        toast({
          title: `Successfully added user with name ${data.name}`,
          variant: 'primary',
        });
      },
      onError: () => {
        toast({
          title: `There was error while adding new user, try again`,
          variant: 'primary',
        });
      },
    });
  };
  return {
    register,
    handleSubmit,
    control,
    errors,
    open,
    setOpen,
    onSubmit,
    isSubmitting,
  };
};

export default useAddUser;
