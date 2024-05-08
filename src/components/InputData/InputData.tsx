import { Input } from '@/components/ui/input';
import { Label } from '../ui/label';

interface InputDataProps {
  className?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  id?: string;
  errorMessage?: string;
  span?: string;
  autocomplete?: string;
  defaultValue?: string;
}

const InputData = (props: InputDataProps) => {
  const {
    className,
    placeholder,
    label,
    name,
    id,
    errorMessage,
    span,
    autocomplete,
    defaultValue,
  } = props;

  return (
    <div className={span}>
      {errorMessage && (
        <span className="text-destructive inline-block mb-1 text-sm">
          {errorMessage}
        </span>
      )}
      <Label htmlFor={name} className="text-right">
        {label}
      </Label>
      <Input
        className={`focus:border-accent focus-visible:ring-accent focus-visible:ring-offset-0 ${className}`}
        placeholder={placeholder}
        name={name}
        id={id}
        autoComplete={autocomplete}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputData;
