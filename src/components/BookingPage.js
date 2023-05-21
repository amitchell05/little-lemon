// Assets
import restaurant from '../assets/restaurant.jpg';

// Components
import BookingForm from './BookingForm';

// Styles
import CallToAction from './CallToAction';

const BookingPage = ({ availableTimes, dispatch, setReservationData }) => {
  const hero = {
    title: 'Book A Table',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: restaurant,
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        setReservationData={setReservationData}
      />
    </>
  );
};

export default BookingPage;
