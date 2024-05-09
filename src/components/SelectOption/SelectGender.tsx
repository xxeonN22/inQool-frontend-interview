import { SelectItem } from '@/components/ui/select';

const SelectGender = () => {
  return (
    <>
      <SelectItem value="male">Male</SelectItem>
      <SelectItem value="female">Female</SelectItem>
      <SelectItem value="other">Other</SelectItem>
    </>
  );
};

export default SelectGender;
