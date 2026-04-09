import { apiClient } from '@/lib/api';
import type { CatInfo } from '@/types';
import { useEffect, useState } from 'react';

type UseCatsOptions = {
  limit?: number;
  page?: number;
};

export const useCats = (options?: UseCatsOptions) => {
  const limit = options?.limit || 10;
  const page = options?.page || 0;

  const [cats, setCats] = useState<CatInfo[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const data = await apiClient
          .get<CatInfo[]>('search', {
            searchParams: {
              limit,
              page,
            },
          })
          .json();
        setCats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsFetching(false);
      }
    };

    void fetchData();
  }, [limit, page]);

  return { cats, isFetching };
};
