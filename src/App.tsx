import Cats from '@/components/Cats';
import Header from '@/components/Header';
import { CurrentFilterProvider } from '@/providers/CurrentFilterProvider';
import type { Filter } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentFilterProvider>
        <Header filters={filters} />
        <div className='container'>
          <Cats />
        </div>
      </CurrentFilterProvider>
    </QueryClientProvider>
  );
}

export default App;
