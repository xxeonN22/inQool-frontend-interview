import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Header = {
  id: number;
  name: string | React.ReactNode;
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
            <TableHead key={header.id} className={`${header.className}`}>
              {header.name}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaders;
