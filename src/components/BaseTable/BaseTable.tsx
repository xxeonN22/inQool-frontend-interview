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
}

export const FilterContext = createContext('');

const BaseTable = ({
  children,
  headers,
  searchPlaceholder,
}: BaseTableProps) => {
  const [filter, setFilter] = useState('');
  return (
    <FilterContext.Provider value={filter}>
      <TableSearchFilter
        filter={filter}
        setFilter={setFilter}
        placeholder={searchPlaceholder}
      />
      <Table>
        <TableHeaders headers={headers} />
        <TableBody>{children}</TableBody>
      </Table>
    </FilterContext.Provider>
  );
};

export default BaseTable;
