import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';

interface EditUserFooterProps {
  isSubmitting: boolean;
}

const EditUserFooter = ({ isSubmitting }: EditUserFooterProps) => {
  return (
    <DialogFooter>
      <Button type="submit" disabled={isSubmitting}>
        Confirm edit
      </Button>
    </DialogFooter>
  );
};

export default EditUserFooter;
