import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';

interface EntityEditFormFooterProps {
  isSubmitting: boolean;
}

const EntityEditFormFooter = ({ isSubmitting }: EntityEditFormFooterProps) => {
  return (
    <DialogFooter>
      <Button type="submit" disabled={isSubmitting}>
        Confirm edit
      </Button>
    </DialogFooter>
  );
};

export default EntityEditFormFooter;
