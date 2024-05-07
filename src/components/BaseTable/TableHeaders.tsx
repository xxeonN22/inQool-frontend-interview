import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Header = {
  name: string;
  className?: string;
};

interface TableHeadersProps {
  headers: Header[];
}

const TableHeaders = ({ headers }: TableHeadersProps) => {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((header) => {
          return (
            <TableHead
              key={header.name}
              className={`${header.className} text-center`}
            >
              {header.name}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaders;
