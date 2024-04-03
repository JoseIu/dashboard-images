import { NavLink } from 'react-router-dom';

import style from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.nav__ul}>
          <li className={style.nav__li}>
            <NavLink to="/search" className={({ isActive }) => (isActive ? `${style.active}` : '')}>
              Search
            </NavLink>
          </li>
          <li className={style.nav__li}>
            <NavLink
              to="/my-photos"
              className={({ isActive }) => (isActive ? `${style.active}` : '')}
            >
              My Photos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
