import Header from '@/components/Header';
import { CurrentFilterProvider } from '@/providers/CurrentFilterProvider';
import type { Filter } from '@/types';

const filters: Filter[] = [
  {
    label: 'Все котики',
    type: 'all',
  },
  {
    label: 'Любимые котики',
    type: 'favorite',
  },
];

function App() {
  return (
    <CurrentFilterProvider>
      <Header filters={filters} />
    </CurrentFilterProvider>
  );
}

export default App;
