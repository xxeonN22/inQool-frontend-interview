import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import InputSearch from '../InputSearch/InputSearch';

interface TableSearchFilterProps {
  setFilter: (value: string) => void;
}

const TableSearchFilter = ({ setFilter }: TableSearchFilterProps) => {
  return (
    <InputSearch
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
