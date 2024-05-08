import { useState, createContext } from 'react';
import { Table, TableBody } from '@/components/ui/table';
import TableHeaders from '@/components/BaseTable/TableHeaders';
import TableSearchFilter from '@/components/BaseTable/TableSearchFilter';

type Header = {
  id: number;
  name: string | React.ReactNode;
  className?: string;
};

interface BaseTableProps {
  children: React.ReactNode;
  headers: Header[];
  searchPlaceholder?: string;
  addButton?: React.ReactNode;
}

export const FilterContext = createContext('');

const BaseTable = ({
  children,
  headers,
  searchPlaceholder,
  addButton,
}: BaseTableProps) => {
  const [filter, setFilter] = useState('');
  return (
    <FilterContext.Provider value={filter}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <TableSearchFilter
          filter={filter}
          setFilter={setFilter}
          placeholder={searchPlaceholder}
        />
        {addButton}
      </div>
      <Table>
        <TableHeaders headers={headers} />
        <TableBody>{children}</TableBody>
      </Table>
    </FilterContext.Provider>
  );
};

export default BaseTable;
