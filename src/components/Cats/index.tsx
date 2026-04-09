import CatCard from '@/components/CatCard';
import { useCats } from '@/hooks/useCats';
import './Cats.css';

function Cats() {
  const { cats, isFetching } = useCats();

  return (
    <div className='container cats'>
      {isFetching ? (
        <p>Идет загрузка данных...</p>
      ) : (
        cats.map(cat => <CatCard catInfo={cat} key={cat.id} />)
      )}
    </div>
  );
}

export default Cats;
