import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import Banner1 from '../../assets/images/banner1.webp';
import Banner2 from '../../assets/images/banner2.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './Home.module.css';
import Card from './Card/Card';
import PhonesImg from '../../assets/images/phones.svg';
import TabletsImg from '../../assets/images/tablets.svg';
import LaptopsImg from '../../assets/images/laptops.svg';

const cardItems = [
  { title: 'Телефоны', type: 0, image: PhonesImg },
  { title: 'Планшеты', type: 1, image: TabletsImg },
  { title: 'Ноутбуки', type: 2, image: LaptopsImg },
];

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
      <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
        <div onClick={() => routeChange('catalog')} className={styles.banner}>
          <img src={Banner1} />
        </div>
        <div onClick={() => routeChange('catalog')} className={styles.banner}>
          <img src={Banner2} />
        </div>
      </Carousel>
      <div className={styles.cardItems}>
        {cardItems.map(item => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
