import type { CatInfo } from '@/types';
import './CatCard.css';

type CatCardProps = {
  catInfo: CatInfo;
};

function CatCard({ catInfo }: CatCardProps) {
  return (
    <div className='cat-card'>
      <img
        className='cat-card__image'
        src={catInfo.url}
        alt='Изображения котика'
      />
    </div>
  );
}

export default CatCard;
