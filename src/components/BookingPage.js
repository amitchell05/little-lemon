// Assets
// TODO: Update with actual photo for component
import restaurantFood from '../assets/restaurantfood.jpg';

// Components
import BookingForm from './BookingForm';

// Styles
import CallToAction from './CallToAction';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  const hero = {
    title: 'Book A Table',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: restaurantFood,
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
