// Components
import BookingPage from './BookingPage';
import HomePage from './HomePage';

// React Tools
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
