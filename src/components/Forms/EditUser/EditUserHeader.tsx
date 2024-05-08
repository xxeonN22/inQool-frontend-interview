import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EditUserHeaderProps {
  userName: string;
}

const EditUserHeader = ({ userName }: EditUserHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle>Edit {userName} details</DialogTitle>
      <DialogDescription>
        Make changes to {userName} here. Click save when you are done.
      </DialogDescription>
    </DialogHeader>
  );
};

export default EditUserHeader;
