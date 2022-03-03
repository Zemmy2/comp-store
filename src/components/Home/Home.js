import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h1>Главная</h1>
      <div className={styles.wrapper}>
        {items.length > 0 ? (
          <div>
            <p>В корзине {items.length} товаров</p>
            <Button className={styles.btn}>
              <Link to='/cart'>Перейти в корзину</Link>
            </Button>
          </div>
        ) : (
          <div>
            <p>В корзине ничего нет</p>
            <Button className={styles.btn}>
              <Link to='/catalog'>Перейти в каталог</Link>
            </Button>
          </div>
        )}
        <div>
          <Button>
            <Link to='/catalog'>Каталог</Link>
          </Button>
        </div>
      </div>
      <div className={styles.banner}>
        <Button outline>
          <Link to='/catalog'>Все предложения ➤</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
