// Components
import AboutPage from './components/AboutPage';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import ContactInfoPage from './components/ContactInfoPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Main from './components/Main';
import MenuPage from './components/MenuPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import PaymentInfoPage from './components/PaymentInfoPage';
import ReservationSummary from './components/ReservationSummary';

// React Tools
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<HomePage />}></Route>
      <Route path='about' element={<AboutPage />}></Route>
      <Route path='menu' element={<MenuPage />}></Route>
      <Route path='booking' element={<BookingPage />}>
        <Route index element={<BookingForm />} />
        <Route path='contact-info' element={<ContactInfoPage />} />
        <Route path='payment-info' element={<PaymentInfoPage />} />
        <Route path='reservation-summary' element={<ReservationSummary />} />
      </Route>
      <Route path='confirmed-booking' element={<ConfirmedBooking />}></Route>
      <Route path='order-online' element={<OrderOnlinePage />}></Route>
      <Route path='login' element={<LoginPage />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
