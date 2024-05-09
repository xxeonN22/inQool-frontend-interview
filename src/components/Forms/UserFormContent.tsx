import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import InputData from '@/components/InputData/InputData';
import SelectOption from '@/components/SelectOption/SelectOption';
import SelectGender from '@/components/SelectOption/SelectGender';
import { FormValues } from '@/validationSchemas/user';

interface UserFormContentProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const UserFormContent = ({
  register,
  control,
  errors,
}: UserFormContentProps) => {
  return (
    <div className="grid gap-4 py-4">
      <InputData<FormValues>
        label="User Name"
        id="name"
        name="name"
        autocomplete="name"
        register={register}
        errorMessage={errors.name && errors.name.message}
      />
      <SelectOption name="gender" label="Gender" control={control}>
        <SelectGender />
      </SelectOption>
    </div>
  );
};

export default UserFormContent;
