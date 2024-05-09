import { Cross2Icon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';

interface InputSearchProps {
  width?: string;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  filter: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
}

const InputSearch = ({
  width,
  className,
  placeholder,
  icon,
  filter,
  onChange,
  id,
  name,
}: InputSearchProps) => {
  return (
    <div className={`relative ${width}`}>
      {filter !== '' && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Cross2Icon onClick={() => onChange('')} className="cursor-pointer" />
        </div>
      )}
      <Input
        value={filter}
        className={`focus:border-accent focus-visible:ring-accent focus-visible:ring-offset-0 pr-8 ${filter !== '' ? 'pl-8' : ''} ${className}`}
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
