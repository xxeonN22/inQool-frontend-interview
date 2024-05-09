import { Button } from '@/components/ui/button';

interface AddNewEntityFooterProps {
  entityName: string;
  isPending: boolean;
}

const AddNewEntityFooter = ({
  entityName,
  isPending,
}: AddNewEntityFooterProps) => {
  return (
    <div className="flex">
      <Button
        className="bg-primary text-primary-foreground mt-6 hover:bg-accent mx-auto"
        disabled={isPending}
      >
        Add new {entityName}
      </Button>
    </div>
  );
};

export default AddNewEntityFooter;
