import { DialogDescription, DialogHeader } from '@/components/ui/dialog';

const AddNewUserHeader = () => {
  return (
    <DialogHeader>
      <DialogDescription className="mt-5 text-center">
        You can add new user by providing details. After you are done, click on
        add new user button
      </DialogDescription>
    </DialogHeader>
  );
};

export default AddNewUserHeader;
