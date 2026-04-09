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
      <button className='cat-card__favorite-btn favorite'>
        <svg
          width='40'
          height='37'
          viewBox='0 0 40 37'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M29 2C34.0554 2 38 5.94457 38 11C38 14.1231 36.6132 17.1134 33.7637 20.5996C30.8911 24.1139 26.7452 27.8828 21.5547 32.5996L20.0049 33.999L18.4463 32.5811L18.4434 32.5781C13.2533 27.8718 9.10739 24.108 6.23535 20.5967C3.38624 17.1134 2 14.123 2 11C2 5.94457 5.94457 2 11 2C13.8744 2 16.6647 3.34775 18.4775 5.47656H21.5225C23.3353 3.34775 26.1256 2 29 2Z'
            stroke='#F24E1E'
            stroke-width='4'
            stroke-linejoin='bevel'
          />
        </svg>
      </button>
    </div>
  );
}

export default CatCard;
