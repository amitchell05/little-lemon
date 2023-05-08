// Components
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';

// React Tools
import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { useIsMenuOpen } from '../contexts/MenuContext';

const initialTimes = [];

const updateTimes = (state, action) => {
  return state;
};

const initializeTimes = (initialTimes) => {
  initialTimes = [
    { id: '1', time: '17:00' },
    { id: '2', time: '18:00' },
    { id: '3', time: '19:00' },
    { id: '4', time: '20:00' },
    { id: '5', time: '21:00' },
    { id: '6', time: '21:00' },
  ];

  return initialTimes;
};

const Main = () => {
  const { isMenuOpen } = useIsMenuOpen();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  return (
    <main className={isMenuOpen ? 'util-overlay' : ''}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route
          path='/booking'
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        ></Route>
        <Route path='/order-online' element={<OrderOnlinePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
