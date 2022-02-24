import './App.css';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { setAuthUserData } from './redux/auth-reducer';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setAuthUserData(auth.currentUser));
      }
    });
  }, []);

  return (
    <div className='app-wrapper'>
      <Header />

      <div className='app-wrapper-content container'>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
