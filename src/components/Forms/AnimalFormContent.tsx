import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import InputData from '@/components/InputData/InputData';
import SelectOption from '@/components/SelectOption/SelectOption';
import SelectAnimalType from '@/components/SelectOption/SelectAnimalType';
import { FormValues } from '@/validationSchemas/animal';

interface AnimalFormContentProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const AnimalFormContent = ({
  register,
  control,
  errors,
}: AnimalFormContentProps) => {
  return (
    <div className="grid gap-4 py-4">
      <InputData<FormValues>
        label="Animal name"
        id="name"
        name="name"
        autocomplete="name"
        register={register}
        errorMessage={errors.name && errors.name.message}
      />
      <SelectOption<FormValues>
        name="type"
        label="Animal type"
        control={control}
      >
        <SelectAnimalType />
      </SelectOption>
      <InputData<FormValues>
        label="Animal age"
        id="age"
        name="age"
        autocomplete="age"
        register={register}
        errorMessage={errors.age && errors.age.message}
        type="number"
      />
    </div>
  );
};

export default AnimalFormContent;
