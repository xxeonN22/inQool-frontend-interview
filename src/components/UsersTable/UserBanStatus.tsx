import { User, UserForm } from '@/types/users';
import { Button } from '@/components/ui/button';
import { useUserEdit } from '@/hooks/useUsers';

interface UserBanStatusProps {
  user: User;
}

const UserBanStatus = ({ user }: UserBanStatusProps) => {
  const { mutate: editUser } = useUserEdit(user.id);

  const handleEdit = () => {
    const payload: UserForm = {
      name: user.name,
      gender: user.gender,
      banned: !user.banned,
    };
    editUser(payload);
  };

  return (
    <>
      {user.banned ? (
        <div>
          <Button size="sm" onClick={() => handleEdit()}>
            Remove ban
          </Button>
        </div>
      ) : (
        <Button size="sm" onClick={() => handleEdit()}>
          Give ban
        </Button>
      )}
    </>
  );
};

export default UserBanStatus;
