import { CurrentFilterContext } from '@/stores/CurrentFilterContext';
import type { FilterType } from '@/types';
import React, { useState } from 'react';

export function CurrentFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  return (
    <CurrentFilterContext
      value={{
        currentFilter,
        setCurrentFilter,
      }}
    >
      {children}
    </CurrentFilterContext>
  );
}
