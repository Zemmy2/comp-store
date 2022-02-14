import styles from './Button.module.css';
import classNames from 'classnames';

const Button = ({ children, onClick, outline, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, className, {
        [styles.outline]: outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
