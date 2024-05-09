import { SelectItem } from '@/components/ui/select';

const SelectAnimalType = () => {
  return (
    <>
      <SelectItem value="cat">Cat</SelectItem>
      <SelectItem value="dog">Dog</SelectItem>
      <SelectItem value="other">Other</SelectItem>
    </>
  );
};

export default SelectAnimalType;
