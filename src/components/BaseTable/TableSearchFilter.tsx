import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import InputSearch from '../InputSearch/InputSearch';

interface TableSearchFilterProps {
  filter: string;
  setFilter: (value: string) => void;
  placeholder?: string;
}

const TableSearchFilter = ({
  filter,
  setFilter,
  placeholder,
}: TableSearchFilterProps) => {
  return (
    <InputSearch
      placeholder={placeholder}
      filter={filter}
      onChange={setFilter}
      width="w-full sm:w-1/3"
      className="my-5"
      id="filter"
      name="filter"
      icon={<MagnifyingGlassIcon />}
    />
  );
};

export default TableSearchFilter;
