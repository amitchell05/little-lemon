// Components
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';

// React Tools
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { useIsMenuOpen } from '../contexts/MenuContext';
import { fetchAPI, submitAPI } from '../api/api';

const Main = () => {
  const navigate = useNavigate();

  const { isMenuOpen } = useIsMenuOpen();

  let initialTimes = [];

  const fetchData = (date) => {
    return fetchAPI(new Date(date));
  };

  const updateTimes = (state, action) => {
    state = fetchData(new Date(action.date));

    return state;
  };

  const initializeTimes = (initialTimes) => {
    initialTimes = fetchData(new Date());

    return initialTimes;
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed-booking');
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    submitAPI();
  }, []);

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
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
        <Route path='/order-online' element={<OrderOnlinePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
