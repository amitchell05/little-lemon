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

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <article className='reservation-summary util-container'>
        <h2>Your Reservation</h2>
        <section>
          <h3>Location</h3>
          <p>Placeholder</p>
          <h3>Seating</h3>
          <p>Placeholder</p>
          <h3>Guests</h3>
          <p>Placeholder</p>
          <h3>Time</h3>
          <p>Placeholder</p>
          <h3>Date</h3>
          <p>Placeholder</p>
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
