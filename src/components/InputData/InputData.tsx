import { Input } from '@/components/ui/input';

interface InputDataProps {
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  errorMessage?: string;
  span?: string;
  autocomplete?: string;
}

const InputData = (props: InputDataProps) => {
  const { className, placeholder, name, id, errorMessage, span, autocomplete } =
    props;

  return (
    <div className={span}>
      {errorMessage && (
        <span className="text-destructive inline-block mb-1 text-sm">
          {errorMessage}
        </span>
      )}
      <Input
        className={`focus:border-accent focus-visible:ring-accent focus-visible:ring-offset-0 ${className}`}
        placeholder={placeholder}
        name={name}
        id={id}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputData;
