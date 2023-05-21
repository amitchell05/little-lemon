import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext({
  booking: {},
  'contact-info': {},
  payment: {},
});

export const ReservationProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState({
    booking: {},
    'contact-info': {},
    payment: {},
  });

  return (
    <ReservationContext.Provider
      value={{
        reservationData,
        updateReservationData: (formData) =>
          setReservationData({ ...formData }),
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationData = () => useContext(ReservationContext);
