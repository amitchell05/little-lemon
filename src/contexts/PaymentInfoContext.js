import { createContext, useContext, useState } from 'react';

const PaymentInfoContext = createContext(false);

export const PaymentInfoProvider = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState(null);

  return (
    <PaymentInfoContext.Provider
      value={{
        paymentInfo,
        savePaymentInfo: (paymentInfo) => setPaymentInfo(paymentInfo),
      }}
    >
      {children}
    </PaymentInfoContext.Provider>
  );
};

export const usePaymentInfo = () => useContext(PaymentInfoContext);
