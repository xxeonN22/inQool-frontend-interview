import { useMemo } from 'react';

type Entity = {
  id: string;
  name: string;
};

const useFilterAndSort = <T extends Entity>(
  data: T[] | undefined,
  filter: string
): T[] => {
  return useMemo(() => {
    if (!data) return [];
    const filtered = data.filter((entity) =>
      entity.name.toLowerCase().includes(filter.toLowerCase())
    );
    const filteredAndSorted = filtered.sort((a, b) => a.id.localeCompare(b.id));

    return filteredAndSorted;
  }, [data, filter]);
};

export default useFilterAndSort;
