import { User, UserForm } from '@/types/users';
import { useUserEdit } from '@/hooks/useUsers';

const useBanUser = (user: User) => {
  const { mutate: editUser } = useUserEdit(user.id);

  const handleEdit = async () => {
    const payload: UserForm = {
      name: user.name,
      gender: user.gender,
      banned: !user.banned,
    };
    editUser(payload);
  };

  return handleEdit;
};

export default useBanUser;
