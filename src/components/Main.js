// Components
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import ContactInfoPage from './ContactInfoPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';
import PaymentInfoPage from './PaymentInfoPage';
import ReservationSummary from './ReservationSummary';

// React Tools
// import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { useIsMenuOpen } from '../contexts/MenuContext';
// import { fetchAPI, submitAPI } from '../api/api';

// Reducer - Updates available times based on the reservation date a user selects
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_NEW_DATE':
      return state;
    default:
      throw Error('unknown action');
  }
};

// Init - Provides an initial list of times upon load on the booking form page
const initializeTimes = () => {
  return [
    { id: '1', value: '17:00' },
    { id: '2', value: '18:00' },
    { id: '3', value: '19:00' },
    { id: '4', value: '20:00' },
    { id: '5', value: '21:00' },
    { id: '6', value: '22:00' },
    { id: '7', value: '23:00' },
  ];
};

const Main = () => {
  const { isMenuOpen } = useIsMenuOpen();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
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
        <Route path='/contact-info' element={<ContactInfoPage />}></Route>
        <Route path='/payment-info' element={<PaymentInfoPage />}></Route>
        <Route
          path='/reservation-summary'
          element={<ReservationSummary />}
        ></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />}></Route>
        <Route path='/order-online' element={<OrderOnlinePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
