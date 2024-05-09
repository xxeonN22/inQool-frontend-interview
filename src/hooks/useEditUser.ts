import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/user';
import { User, UserForm } from '@/types/users';
import { useUserEdit } from '@/hooks/useUsers';
import { useToast } from '@/components/ui/use-toast';

const useEditUser = (user: User) => {
  const [open, setOpen] = useState(false);
  const { mutate: editUser } = useUserEdit(user.id);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || '',
      gender: user?.gender || 'other',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const payload: UserForm = {
      name: data.name,
      gender: data.gender,
      banned: user.banned,
    };
    editUser(payload, {
      onSuccess: () => {
        setOpen(false);
        toast({
          title: `Successfully edited user with name ${data.name}`,
          variant: 'primary',
        });
      },
      onError: () => {
        toast({
          title: `There was error while editing user, try again`,
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
  };
};

export default useEditUser;
