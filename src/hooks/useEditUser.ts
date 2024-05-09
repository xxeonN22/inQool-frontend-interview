import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '@/validationSchemas/user';
import { useToast } from '@/components/ui/use-toast';
import { User, UserForm } from '@/types/users';
import UsersApi from '@/api/userApi';

const useEditUser = (user: User) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload: UserForm) => UsersApi.updateSingle(user.id, payload),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
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
    mutation.mutate(payload);
  };

  const { isPending } = mutation;

  return {
    register,
    handleSubmit,
    control,
    errors,
    open,
    setOpen,
    onSubmit,
    isPending,
  };
};

export default useEditUser;
