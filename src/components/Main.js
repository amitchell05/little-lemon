// Components
import BookingPage from './BookingPage';
import HomePage from './HomePage';

// React Tools
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    { id: '1', time: '17:00' },
    { id: '2', time: '18:00' },
    { id: '3', time: '19:00' },
    { id: '4', time: '20:00' },
    { id: '5', time: '21:00' },
    { id: '6', time: '21:00' },
  ]);

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default Main;
