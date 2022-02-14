import preloader from '../../../assets/images/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div>
      <img className={styles.preloaderImg} src={preloader} />
    </div>
  );
};

export default Preloader;
