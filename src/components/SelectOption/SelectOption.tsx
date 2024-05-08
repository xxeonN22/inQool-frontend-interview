import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormValues } from '@/validationSchemas/user';

interface SelectOptionProps {
  children: React.ReactNode;
  label?: string;
  name: keyof FormValues;
  control: Control<FormValues>;
  errorMessage?: string;
}

const SelectOption = ({
  control,
  name,
  label,
  errorMessage,
  children,
}: SelectOptionProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      {errorMessage && <span className="text-destructive">{errorMessage}</span>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            name={name}
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
