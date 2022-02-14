import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <div className='app-wrapper-content container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
