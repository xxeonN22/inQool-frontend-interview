import { DialogDescription, DialogHeader } from '@/components/ui/dialog';

interface AddNewEntityHeaderProps {
  entityName: string;
}

const AddNewEntityHeader = ({ entityName }: AddNewEntityHeaderProps) => {
  return (
    <DialogHeader>
      <DialogDescription className="mt-5 text-center">
        You can add new {entityName} by providing details. After you are done,
        click on add new user button
      </DialogDescription>
    </DialogHeader>
  );
};

export default AddNewEntityHeader;
