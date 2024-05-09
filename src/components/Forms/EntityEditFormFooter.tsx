import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';

interface EntityEditFormFooterProps {
  isPending: boolean;
}

const EntityEditFormFooter = ({ isPending }: EntityEditFormFooterProps) => {
  return (
    <DialogFooter>
      <Button type="submit" disabled={isPending}>
        Confirm edit
      </Button>
    </DialogFooter>
  );
};

export default EntityEditFormFooter;
