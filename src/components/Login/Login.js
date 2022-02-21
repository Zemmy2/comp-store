import styles from './Login.module.css';
import GoogleLoginButton from './GoogleLoginButton/GoogleLoginButton';

const Login = () => {
  return (
    <div className={styles.wrap}>
      <h1>Войти</h1>

      <div className={styles.loginBlock}>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
