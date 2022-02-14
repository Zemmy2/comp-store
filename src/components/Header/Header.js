import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <ul className={styles.nav}>
      <div className={`${styles.navInner} container`}>
        <Link className={styles.logo} to='/'>
          CompStore
        </Link>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/catalog'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Корзина
            </NavLink>
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default Header;
