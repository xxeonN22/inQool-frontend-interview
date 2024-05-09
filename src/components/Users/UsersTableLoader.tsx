import { TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

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
  return <>{rows}</>;
};

export default UsersTableLoader;
