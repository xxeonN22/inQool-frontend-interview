import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '../ui/label';

interface SelectOptionProps {
  defaultValue: string;
  children: React.ReactNode;
  htmlFor?: string;
  label?: string;
  id?: string;
}

const SelectOption = ({
  defaultValue,
  children,
  htmlFor,
  label,
  id,
}: SelectOptionProps) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Select defaultValue={defaultValue}>
        <SelectTrigger
          id={id}
          className="focus:border-accent focus:ring-accent focus:ring-offset-0"
        >
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
};

export default SelectOption;
