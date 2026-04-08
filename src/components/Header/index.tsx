import type { Filter } from '@/types';
import './Header.css';

type HeaderProps = {
  filters: Filter[];
};

function Header({ filters }: HeaderProps) {
  return (
    <header className='header'>
      <ul className='container header__list'>
        {filters.map(filter => (
          <li className='header__list-item' key={filter.type}>
            {filter.label}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
