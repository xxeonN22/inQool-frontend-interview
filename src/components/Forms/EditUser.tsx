import { User } from '@/types/users';
import { Button } from '../ui/button';
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import InputData from '../InputData/InputData';
import SelectOption from '../SelectOption/SelectOption';
import SelectGender from '../SelectOption/SelectGender';
import UserBanStatus from '../RadioGroup/RadioOption';

interface EditUserProps {
  user: User;
}

const EditUser = ({ user }: EditUserProps) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit {user.name} details</DialogTitle>
        <DialogDescription>
          Make changes to {user.name} here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <InputData defaultValue={user.name} name="name" label="User name" />
        <SelectOption defaultValue={user.gender}>
          <SelectGender />
        </SelectOption>
        <UserBanStatus defaultValue={user.banned ? 'true' : 'false'} />
      </div>
      <DialogFooter>
        <Button type="submit">Confirm edit</Button>
      </DialogFooter>
    </>
  );
};

export default EditUser;
