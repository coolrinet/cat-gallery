import CatCard from '@/components/CatCard';
import { useCats } from '@/hooks/useCats';
import { CurrentFilterContext } from '@/stores/CurrentFilterContext';
import type { CatInfo } from '@/types';
import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useReadLocalStorage } from 'usehooks-ts';
import './Cats.css';

function Cats() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useCats();

  const favoriteCats = useReadLocalStorage<CatInfo[]>('favoriteCats');

  const { currentFilter } = useContext(CurrentFilterContext)!;

  const cats = data?.pages.flat() || [];

  return isLoading ? (
    <p style={{ paddingTop: '52px' }}>Идет загрузка данных...</p>
  ) : currentFilter === 'all' ? (
    <InfiniteScroll
      className='cats'
      dataLength={cats.length}
      hasMore={hasNextPage}
      loader={<p>Идет поиск новых котят...</p>}
      next={fetchNextPage}
    >
      {cats.map(cat => (
        <CatCard catInfo={cat} key={cat.id} />
      ))}
    </InfiniteScroll>
  ) : favoriteCats && favoriteCats.length ? (
    <div className='cats'>
      {favoriteCats.map(cat => (
        <CatCard catInfo={cat} key={cat.id} />
      ))}
    </div>
  ) : (
    <p style={{ paddingTop: '52px' }}>Тут нечего показывать :(</p>
  );
}

export default Cats;
