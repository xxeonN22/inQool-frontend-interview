import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EntityEditFormHeaderProps {
  entityName: string;
}

const EntityEditFormHeader = ({ entityName }: EntityEditFormHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle>Edit {entityName} details</DialogTitle>
      <DialogDescription>
        Make changes to {entityName} here. Click save when you are done.
      </DialogDescription>
    </DialogHeader>
  );
};

export default EntityEditFormHeader;
