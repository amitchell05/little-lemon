// Assets
import foodInBowl from '../assets/taylor-kiser-6RJct18G_3I-unsplash.jpg';

// Components
import CallToAction from './CallToAction';

// Styles
import './ReservationSummary.scss';

const ReservationSummary = () => {
  const hero = {
    title: 'Confirm Your Reservation',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: foodInBowl,
  };

  const bookingData = JSON.parse(localStorage.getItem('booking'));
  // const contactData = JSON.parse(localStorage.getItem('contact'));

  const seating =
    bookingData.seating.charAt(0).toUpperCase() + bookingData.seating.slice(1);

  // TODO (optional): determine how to make it support multiple localess
  const getFullDate = (date) => {
    console.log(date);
    const month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${date.getDay()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <article className='reservation-summary util-container'>
        <h2>Your Reservation</h2>
        <section>
          <h3>Location</h3>
          <p>{bookingData.location}</p>
          <h3>Seating</h3>
          <p>{seating}</p>
          <h3>Guests</h3>
          <p>{bookingData.guests}</p>
          <h3>Time</h3>
          {/* TODO (optional): determine how to make it support multiple locales */}
          <p>{bookingData.resTime}</p>
          <h3>Date</h3>
          <p>{getFullDate(new Date(bookingData.resDate))}</p>
        </section>
        <div className='reservation-summary-actions'>
          <input
            type='button'
            value='Back'
            className='button button--secondary'
          />
          <input
            type='submit'
            value='Confirm'
            className='button button--primary'
          />
        </div>
      </article>
    </>
  );
};

export default ReservationSummary;
