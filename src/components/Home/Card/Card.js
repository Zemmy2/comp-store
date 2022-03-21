import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveCategory } from '../../../redux/catalog-reducer';
import styles from './Card.module.css';

const Card = ({ title, type, image }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveCategory(type));
  };

  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <Link to='/catalog'>
        <div className={styles.card}>
          <img src={image} />
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
