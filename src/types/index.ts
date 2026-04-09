type FilterType = 'all' | 'favorite';

type Filter = {
  label: string;
  type: FilterType;
};

type CatInfo = {
  id: string;
  url: string;
};

export type { CatInfo, Filter, FilterType };
