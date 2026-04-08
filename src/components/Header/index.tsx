import { CurrentFilterContext } from '@/stores/CurrentFilterContext';
import type { Filter, FilterType } from '@/types';
import clsx from 'clsx';
import { useContext } from 'react';
import './Header.css';

type HeaderProps = {
  filters: Filter[];
};

function Header({ filters }: HeaderProps) {
  const { currentFilter, setCurrentFilter } = useContext(CurrentFilterContext)!;

  const onFilterClick = (newFilter: FilterType) => {
    setCurrentFilter(newFilter);
  };

  return (
    <header className='header'>
      <ul className='container header__list'>
        {filters.map(filter => (
          <li
            onClick={() => onFilterClick(filter.type)}
            className={clsx('header__list-item', {
              active: filter.type === currentFilter,
            })}
            key={filter.type}
          >
            {filter.label}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
