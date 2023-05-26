// Components
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import ContactInfoPage from './ContactInfoPage';
import PaymentInfoPage from './PaymentInfoPage';
import ReservationSummary from './ReservationSummary';
import ConfirmedBooking from './ConfirmedBooking';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';

// React Tools
import { useIsMenuOpen } from '../contexts/MenuContext';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  const { isMenuOpen } = useIsMenuOpen();

  return (
    <>
      <Header />
      <main className={isMenuOpen ? 'util-overlay' : ''}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/menu' element={<MenuPage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/contact-info' element={<ContactInfoPage />}></Route>
          <Route path='/payment-info' element={<PaymentInfoPage />}></Route>
          <Route
            path='/reservation-summary'
            element={<ReservationSummary />}
          ></Route>
          <Route
            path='/confirmed-booking'
            element={<ConfirmedBooking />}
          ></Route>
          <Route path='/order-online' element={<OrderOnlinePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Main;
