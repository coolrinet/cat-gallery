type FilterType = 'all' | 'favorite';

type Filter = {
  label: string;
  type: FilterType;
};

export type { Filter, FilterType };
