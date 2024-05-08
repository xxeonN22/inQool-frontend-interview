import GenericTable from '@/components/BaseTable/BaseTable';

import { TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

const headers = [
  {
    id: 1,
    name: <Skeleton className="h-[20px] rounded-full" />,
    className: 'w-[40%]',
  },
  {
    id: 2,
    name: <Skeleton className="h-[20px] rounded-full" />,
    className: 'w-[10%]',
  },
  {
    id: 3,
    name: <Skeleton className="h-[20px] rounded-full" />,
    className: 'w-[25%]',
  },
  {
    id: 4,
    name: <Skeleton className="h-[20px] rounded-full" />,
    className: 'w-[25%]',
  },
];

const rows = new Array(20).fill(null).map((_, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <TableRow key={index}>
    <TableCell>
      <Skeleton className="h-[20px] rounded-full" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] rounded-full" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] rounded-full" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] rounded-full" />
    </TableCell>
  </TableRow>
));

const UsersTableLoader = () => {
  return <GenericTable headers={headers}>{rows}</GenericTable>;
};

export default UsersTableLoader;
