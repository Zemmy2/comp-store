import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import emptyCart from '../../assets/images/empty-cart.png';
import Button from '../common/Button/Button';
import { removeAllItems, removeItem } from '../../redux/cart-reducer';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const onRemoveItem = (id, type) => {
    dispatch(removeItem(id, type));
  };

  const onBuy = () => {
    dispatch(removeAllItems());
  };

  return (
    <>
      <h1>Корзина</h1>

      {items.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <td>Изображение</td>
                <td>Название</td>
                <td>Цена</td>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={`${item.type}_${item.id}`}>
                  <td>
                    <img src={item.imageUrl} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button onClick={() => onRemoveItem(item.id, item.type)}>
                      Удалить
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Цена: {totalPrice} ₽</h2>
          <Button onClick={onBuy}>Купить</Button>
        </div>
      ) : (
        <div className={styles.emptyCartBlock}>
          <img src={emptyCart} />
          <h2>Корзина пуста</h2>
          <Link to='/'>
            <Button outline>Вернуться на главную</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
