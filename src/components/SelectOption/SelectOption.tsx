import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectOptionProps {
  defaultValue: string;
  children: React.ReactNode;
}

const SelectOption = ({ defaultValue, children }: SelectOptionProps) => {
  return (
    <Select>
      <SelectTrigger className="focus:border-accent focus:ring-accent focus:ring-offset-0">
        <SelectValue placeholder={defaultValue} defaultValue={defaultValue} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default SelectOption;
