// Assets
import foodInBowl from '../assets/taylor-kiser-6RJct18G_3I-unsplash.jpg';

// Components
import CallToAction from './CallToAction';

// React Tools
import { submitAPI } from '../api/api';
import { usePaymentInfo } from '../contexts/PaymentInfoContext';

// Styles
import './ReservationSummary.scss';

const ReservationSummary = ({ useNavigate }) => {
  const navigate = useNavigate();
  const { paymentInfo, savePaymentInfo } = usePaymentInfo();

  const hero = {
    title: 'Confirm Your Reservation',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: foodInBowl,
  };

  const bookingData = JSON.parse(localStorage.getItem('booking'));
  const contactData = JSON.parse(localStorage.getItem('contact'));
  const paymentData = paymentInfo;

  const seating = bookingData.seating
    ? bookingData.seating.charAt(0).toUpperCase() + bookingData.seating.slice(1)
    : '';

  // TODO (optional): determine how to make it support multiple localess
  const getFullDate = (date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getUTCDate();

    return `${month} ${day}, ${date.getFullYear()}`;
  };

  const reservationData = {
    booking: bookingData,
    contact: contactData,
    payment: paymentData,
  };

  const confirmReservation = () => {
    if (submitAPI(reservationData)) {
      localStorage.removeItem('booking');
      localStorage.removeItem('contact');
      savePaymentInfo(null);

      navigate('/confirmed-booking');

      // Scroll to the top of the confirmed booking page (figure out if there's a better way)
      window.scrollTo(0, 0);
    }
  };

  const goToPrevious = () => {
    navigate('/payment-info');
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <article className='reservation-summary util-container'>
        <h2>Your Reservation</h2>
        <section className='reservation-detail reservation-details'>
          <div className='reservation-detail reservation-detail'>
            <h3>Location</h3>
            <p>{bookingData.location}</p>
          </div>
          <div className='reservation-detail reservation-detail--flex'>
            <h3>Seating</h3>
            <p>{seating}</p>
          </div>
          <div className='reservation-detail reservation-detail--flex'>
            <h3>Guests</h3>
            <p>{bookingData.guests}</p>
          </div>
          <div className='reservation-detail reservation-detail--flex reservation-detail--no-bottom-margin'>
            <h3>Time</h3>
            {/* TODO (optional): determine how to make it support multiple locales */}
            <p>{bookingData.resTime}</p>
          </div>
          <div className='reservation-detail reservation-detail--flex reservation-detail--no-bottom-margin'>
            <h3>Date</h3>
            <p>{getFullDate(new Date(bookingData.resDate))}</p>
          </div>
        </section>
        <div className='reservation-summary-actions'>
          <input
            type='button'
            value='Back'
            className='button button--secondary'
            onClick={goToPrevious}
          />
          <input
            type='button'
            value='Confirm'
            className='button button--primary'
            onClick={confirmReservation}
          />
        </div>
      </article>
    </>
  );
};

export default ReservationSummary;
