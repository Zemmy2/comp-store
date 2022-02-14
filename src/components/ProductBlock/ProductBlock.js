import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './ProductBlock.module.css';

const ProductBlock = ({ imageUrl, title, price, onClick, id, type }) => {
  const items = useSelector(state => state.cart.items);
  let inCart;

  items.forEach(item => {
    if (item.id === id && item.type === type) {
      inCart = true;
    }
  });

  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.price}>{price} ₽</span>
      {inCart ? (
        <Button outline>
          <Link to='/cart'>Перейти в корзину</Link>
        </Button>
      ) : (
        <Button onClick={onClick}>Добавить в корзину</Button>
      )}
    </div>
  );
};

export default ProductBlock;
