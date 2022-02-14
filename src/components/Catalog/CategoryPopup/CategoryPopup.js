import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../../../redux/catalog-reducer';
import Button from '../../common/Button/Button';
import styles from './CategoryPopup.module.css';

const CategoryPopup = ({ categoryItems, activeCategory }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      setIsOpened(false);
    };
  }, []);
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const buttonRef = useRef(null);

  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const onCategorySelect = idx => {
    dispatch(setActiveCategory(idx));
  };

  return (
    <div>
      <div ref={buttonRef}>
        <Button onClick={toggleIsOpened}>
          Категория: {categoryItems[activeCategory].name} {isOpened ? '▲' : '▼'}
        </Button>
      </div>
      {isOpened && (
        <div className={styles.menu}>
          <ul>
            {categoryItems.map((category, idx) => (
              <li
                onClick={() => onCategorySelect(idx)}
                className={idx === activeCategory ? styles.active : ''}
                key={`${category.type}_${idx}`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryPopup;
