import { Button } from '@/components/ui/button';

interface AddNewEntityFooterProps {
  entityName: string;
}

const AddNewEntityFooter = ({ entityName }: AddNewEntityFooterProps) => {
  return (
    <div className="flex">
      <Button className="bg-primary text-primary-foreground mt-6 hover:bg-accent mx-auto">
        Add new {entityName}
      </Button>
    </div>
  );
};

export default AddNewEntityFooter;
