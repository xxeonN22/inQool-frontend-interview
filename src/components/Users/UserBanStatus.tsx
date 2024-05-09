import { User } from '@/types/users';
import { Button } from '@/components/ui/button';
import useBanUser from '@/hooks/useBanUser';

interface UserBanStatusProps {
  user: User;
}

const UserBanStatus = ({ user }: UserBanStatusProps) => {
  const { handleEdit, isPending } = useBanUser(user);
  return (
    <>
      {user.banned ? (
        <div>
          <Button
            disabled={isPending}
            size="sm"
            className="h-7 px-2 font-normal rounded-sm"
            onClick={() => handleEdit()}
          >
            Remove ban
          </Button>
        </div>
      ) : (
        <Button
          disabled={isPending}
          size="sm"
          className="h-7 px-2 font-normal rounded-sm"
          onClick={() => handleEdit()}
        >
          Give ban
        </Button>
      )}
    </>
  );
};

export default UserBanStatus;
