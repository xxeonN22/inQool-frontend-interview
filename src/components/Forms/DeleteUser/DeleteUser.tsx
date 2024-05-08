import { useState } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import Modal from '@/components/Modal/Modal';
import { DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useUserDelete } from '@/hooks/useUsers';

interface DeleteUserProps {
  userName: string;
  userId: string;
  trigger: React.ReactNode | string;
  triggerClass?: string;
}

const DeleteUser = ({
  userName,
  userId,
  trigger,
  triggerClass,
}: DeleteUserProps) => {
  const [open, setOpen] = useState(false);
  const { mutateAsync: deleteUser } = useUserDelete(userId);
  return (
    <Modal
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
      triggerClass={triggerClass}
    >
      <DialogHeader>
        <DialogTitle>You are about to delete {userName}</DialogTitle>
        <DialogDescription>
          Are you really sure? This action is permanent and can not be taken
          back.
        </DialogDescription>
      </DialogHeader>
      <Button
        className="bg-destructive text-destructive-foreground mt-6 hover:bg-red-700 mx-auto"
        onClick={() => {
          setOpen(false);
          deleteUser();
        }}
      >
        Confirm delete
      </Button>
    </Modal>
  );
};

export default DeleteUser;
