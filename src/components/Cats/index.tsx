import CatCard from '@/components/CatCard';
import { useCats } from '@/hooks/useCats';
import { CurrentFilterContext } from '@/stores/CurrentFilterContext';
import type { CatInfo } from '@/types';
import { useContext } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import './Cats.css';

function Cats() {
  const { cats, isFetching } = useCats();

  const favoriteCats = useReadLocalStorage<CatInfo[]>('favoriteCats');

  const { currentFilter } = useContext(CurrentFilterContext)!;

  const displayedData = currentFilter === 'all' ? cats : favoriteCats;

  return (
    <div className='container cats'>
      {isFetching ? (
        <p>Идет загрузка данных...</p>
      ) : displayedData && displayedData.length ? (
        displayedData.map(cat => <CatCard catInfo={cat} key={cat.id} />)
      ) : (
        <p>Тут нечего показывать :(</p>
      )}
    </div>
  );
}

export default Cats;
