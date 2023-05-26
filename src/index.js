import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenuProvider } from './contexts/MenuContext';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

// Components
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import ContactInfoPage from './components/ContactInfoPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Main from './components/Main';
import MenuPage from './components/MenuPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import ReservationSummary from './components/ReservationSummary';
import PaymentInfoPage from './components/PaymentInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/about',
            element: <AboutPage />,
          },
          {
            path: '/menu',
            element: <MenuPage />,
          },
          {
            path: '/booking',
            element: <BookingPage useNavigate={useNavigate} />,
          },
          {
            path: '/contact-info',
            element: <ContactInfoPage useNavigate={useNavigate} />,
          },
          {
            path: '/payment-info',
            element: <PaymentInfoPage useNavigate={useNavigate} />,
          },
          {
            path: '/reservation-summary',
            element: <ReservationSummary useNavigate={useNavigate} />,
          },
          {
            path: '/confirmed-booking',
            element: <ConfirmedBooking />,
          },
          {
            path: '/order-online',
            element: <OrderOnlinePage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
