import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectOptionProps<T extends FieldValues> {
  children: React.ReactNode;
  label?: string;
  name: Path<T>;
  control: Control<T>;
  errorMessage?: string;
}

const SelectOption = <T extends FieldValues>({
  control,
  name,
  label,
  errorMessage,
  children,
}: SelectOptionProps<T>) => {
  return (
    <div>
      <Label htmlFor={String(name)}>{label}</Label>
      {errorMessage && <span className="text-destructive">{errorMessage}</span>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            name={String(name)}
          >
            <SelectTrigger
              id={field.name}
              aria-labelledby={label}
              className="focus:border-accent focus:ring-accent focus:ring-offset-0"
            >
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>{children}</SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectOption;
