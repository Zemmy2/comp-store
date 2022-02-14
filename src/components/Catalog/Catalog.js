import { useDispatch, useSelector } from 'react-redux';
import styles from './Catalog.module.css';
import ProductBlock from '../ProductBlock/ProductBlock';
import { addItem } from '../../redux/cart-reducer';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../../firebase';
import Preloader from '../common/Preloader/Preloader';
import CategoryPopup from './CategoryPopup/CategoryPopup';

const categoryItems = [
  { name: 'Телефоны', type: 'phones' },
  { name: 'Планшеты', type: 'tablets' },
  { name: 'Ноутбуки', type: 'laptops' },
];

const Catalog = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.catalog.activeCategory);
  const navigate = useNavigate();
  const [items, loading] = useCollection(
    collection(getFirestore(app), categoryItems[activeCategory].type)
  );

  const onAddToCart = item => {
    dispatch(addItem(item));
    navigate('/cart');
  };

  return (
    <div>
      <div className={styles.top}>
        <h1>Каталог</h1>
        <CategoryPopup
          categoryItems={categoryItems}
          activeCategory={activeCategory}
        />
      </div>

      <div className={styles.items}>
        {items ? (
          <>
            {items.docs.map(item => (
              <ProductBlock
                key={item.id}
                onClick={() => onAddToCart({ ...item.data(), id: item.id })}
                {...item.data()}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default Catalog;
