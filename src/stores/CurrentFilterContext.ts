import type { FilterType } from '@/types';
import { createContext } from 'react';

type CurrentFilterContextType = {
  currentFilter: FilterType;
  setCurrentFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

export const CurrentFilterContext =
  createContext<CurrentFilterContextType | null>(null);
