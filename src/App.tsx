import Header from '@/components/Header';
import { useCats } from '@/hooks/useCats';
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
  const { cats, isFetching } = useCats({ limit: 2 });

  return (
    <CurrentFilterProvider>
      <Header filters={filters} />
      <div className='container'>
        {isFetching ? (
          <p>Идет загрузка данных...</p>
        ) : (
          cats.map(cat => (
            <div key={cat.id}>
              <img src={cat.url} alt='' />
              <p>Кот {cat.id}</p>
            </div>
          ))
        )}
      </div>
    </CurrentFilterProvider>
  );
}

export default App;
