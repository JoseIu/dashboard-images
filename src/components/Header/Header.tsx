import Navigation from '../routes/Navigation';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${style.header} wrapper`}>
      <div className={style.header__container}>
        <h1 className={style.header__logo}>Logo</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
