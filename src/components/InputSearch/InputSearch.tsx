import { Input } from '@/components/ui/input';

interface InputSearchProps {
  width?: string;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
}

const InputSearch = ({
  width,
  className,
  placeholder,
  icon,
  onChange,
  id,
  name,
}: InputSearchProps) => {
  return (
    <div className={`relative ${width}`}>
      <Input
        className={`focus:border-accent focus-visible:ring-accent focus-visible:ring-offset-0 pr-8 ${className}`}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
