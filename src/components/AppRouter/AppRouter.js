import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';

const AppRouter = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      {user ? (
        <>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
