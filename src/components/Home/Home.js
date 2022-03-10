import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  const items = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const routeChange = path => {
    navigate('/' + path);
  };

  return (
    <div>
      <h1>Главная</h1>
      <div className={styles.wrapper}>
        {items.length > 0 ? (
          <div>
            <p>В корзине {items.length} товаров</p>
            <Button onClick={() => routeChange('cart')} className={styles.btn}>
              Перейти в корзину
            </Button>
          </div>
        ) : (
          <div>
            <p>В корзине ничего нет</p>
            <Button
              onClick={() => routeChange('catalog')}
              className={styles.btn}
            >
              Перейти в каталог
            </Button>
          </div>
        )}
        <div>
          <Button onClick={() => routeChange('catalog')}>Каталог</Button>
        </div>
      </div>
      <div className={styles.banner}>
        <Button onClick={() => routeChange('catalog')} outline>
          Все предложения ➤
        </Button>
      </div>
    </div>
  );
};

export default Home;
