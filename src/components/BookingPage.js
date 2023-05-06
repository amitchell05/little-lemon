// Assets
// TODO: Update with actual photo for component
import restaurantFood from '../assets/restaurantfood.jpg';

// Components
import BookingForm from './BookingForm';

// Styles
import './BookingPage.scss';
import CallToAction from './CallToAction';

const BookingPage = ({ availableTimes, dispatch }) => {
  const hero = {
    title: 'Book A Table',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: restaurantFood,
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} className={'util-hero-title'} />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
