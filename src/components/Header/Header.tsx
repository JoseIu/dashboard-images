import Navigation from '../routes/Navigation';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${style.header} wrapper`}>
      <h1 className={style.header__logo}>Logo</h1>
      <Navigation />
    </header>
  );
};

export default Header;
