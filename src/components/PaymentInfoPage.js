// Assets
import payment from '../assets/towfiqu-barbhuiya-HNPrWOH2Z8U-unsplash.jpg';

// Components
import CallToAction from './CallToAction';
import PaymentInfoForm from './PaymentInfoForm';

const PaymentInfoPage = () => {
  const hero = {
    title: 'Payment Details',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: payment,
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <PaymentInfoForm />
    </>
  );
};

export default PaymentInfoPage;
