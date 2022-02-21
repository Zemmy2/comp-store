import styles from './GoogleLoginButton.module.css';
import Button from '../../common/Button/Button';
import googleLogo from '../../../assets/images/google-logo.svg';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setAuthUserData } from '../../../redux/auth-reducer';

const GoogleLoginButton = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(result => {
      const user = result.user;
      dispatch(setAuthUserData(user));
    });
  };

  return (
    <Button onClick={signInWithGoogle} className={styles.btn} outline>
      <div>
        <img src={googleLogo} />
      </div>
      <span>Войти с помощью Google</span>
    </Button>
  );
};

export default GoogleLoginButton;
