// Assets
import heroImage from '../assets/outcast-india-w3WAeMEBXQE-unsplash.jpg';

// Components
import CallToAction from './CallToAction';
import Specials from './Specials';

const ConfirmedBooking = () => {
  const hero = {
    title: 'Reservation Confirmed',
    leadText: `We have sent your reservation details to your email and phone.\n\nWe look forward to seeing you soon!`,
    image: heroImage,
    link: '/',
    linkText: 'Home',
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} leadTextNewline='lead-text--newline' />
      <Specials></Specials>
    </>
  );
};

export default ConfirmedBooking;
