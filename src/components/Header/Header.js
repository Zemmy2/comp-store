import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setAuthUserData } from '../../redux/auth-reducer';
import Button from '../common/Button/Button';
import styles from './Header.module.css';

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const logout = () => {
    signOut(auth).then(() => {
      dispatch(setAuthUserData(null));
    });
  };

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
          {user && (
            <li>
              <NavLink
                to='/cart'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Корзина
              </NavLink>
            </li>
          )}
          <li>
            {user ? (
              <div>
                <span className={styles.name}>{user.displayName} - </span>
                <Button onClick={logout} outline>
                  Выйти
                </Button>
              </div>
            ) : (
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Войти
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default Header;
