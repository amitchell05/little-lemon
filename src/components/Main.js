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
import { useReducer } from 'react';
import { useIsMenuOpen } from '../contexts/MenuContext';
import { fetchAPI, submitAPI } from '../api/api';

// Initial state of available times
const initialTimes = [];

// Generates a list of available bookings based on the date a user selects in the booking form
const fetchData = (date) => {
  return fetchAPI(date);
};

// Provides an initial list of times upon load on the booking form page
const initializeTimes = () => {
  return fetchData();
};

// Reducer
// Updates available times based on the date a user selects
const updateTimes = (state = initialTimes, action) => {
  switch (action.type) {
    case 'SET_NEW_DATE':
      state = fetchData(new Date(action.date));
      return state;
    default:
      throw Error('unknown action');
  }
};

const Main = () => {
  const { isMenuOpen } = useIsMenuOpen();
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  // Submits the booking form and navigates users to the confirmed booking page
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed-booking');

      // Scroll to the top of the confirmed booking page (figure out if there's a better way)
      window.scrollTo(0, 0);
    }
  };

  return (
    <main className={isMenuOpen ? 'util-overlay' : ''}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
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
