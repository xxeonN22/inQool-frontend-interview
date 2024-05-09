import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface InputDataProps<T extends FieldValues> {
  className?: string;
  placeholder?: string;
  label?: string;
  id?: string;
  errorMessage?: string;
  autocomplete?: string;
  defaultValue?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}

const InputData = <T extends FieldValues>({
  className,
  placeholder,
  label,
  id,
  errorMessage,
  autocomplete,
  defaultValue,
  name,
  register,
}: InputDataProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      {errorMessage && (
        <span className="text-destructive inline-block mb-1 text-sm">
          {errorMessage}
        </span>
      )}
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={`focus:border-accent focus-visible:ring-accent focus-visible:ring-offset-0 ${className}`}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name)}
        id={id}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputData;
