import Header from '@/components/Header';
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
    <>
      <Header filters={filters} />
    </>
  );
}

export default App;
