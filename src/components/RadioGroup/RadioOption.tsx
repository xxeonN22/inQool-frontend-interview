import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface UserBanStatusProps {
  defaultValue: string;
}

const UserBanStatus = ({ defaultValue }: UserBanStatusProps) => {
  return (
    <div>
      <RadioGroup
        defaultValue={defaultValue}
        className="w-full flex justify-center gap-8"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="true" id="true" />
          <Label htmlFor="true">Banned</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="false" id="false" />
          <Label htmlFor="false">Un banned</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UserBanStatus;
