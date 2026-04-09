import { apiClient } from '@/lib/api';
import type { CatInfo } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';

async function fetchData({
  pageParam = 0,
}: {
  pageParam: number;
}): Promise<CatInfo[]> {
  const res = await apiClient.get<CatInfo[]>('search', {
    searchParams: {
      page: pageParam,
      limit: 15,
    },
  });

  return res.json();
}

export const useCats = () => {
  return useInfiniteQuery({
    queryKey: ['cats'],
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length : undefined;
    },
  });
};
