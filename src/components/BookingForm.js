// React Tools
import { useState } from 'react';

// Styles
import './BookingForm.scss';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [bookingForm, setBookingForm] = useState({
    date: '',
    resTime: '',
    guests: 1,
    occasion: '',
  });

  const getIsFormValid = () => {
    return (
      bookingForm.date &&
      bookingForm.resTime &&
      bookingForm.guests &&
      bookingForm.occasion
    );
  };

  const clearForm = () => {
    setBookingForm({
      date: '',
      resTime: '',
      guests: 1,
      occasion: 'occasion',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearForm();
  };

  return (
    <div className='util-container'>
      <form
        onSubmit={handleSubmit}
        aria-label='booking-form'
        className='booking-form'
      >
        <h2>Reservation Form</h2>
        <fieldset>
          <legend className='visually-hidden'>
            Enter your reservation details
          </legend>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            data-testid='res-date'
            name='res-date'
            value={bookingForm.date}
            onChange={(e) => {
              setBookingForm({ ...bookingForm, date: e.target.value });
              dispatch({ type: 'set_new_date', date: e.target.value });
            }}
            required
          />
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            name='res-time'
            value={bookingForm.resTime}
            onChange={(e) =>
              setBookingForm({ ...bookingForm, resTime: e.target.value })
            }
            required
          >
            <option value=''>Select a time</option>
            {availableTimes.map((time) => {
              return (
                <option key={time.id} value={time.time}>
                  {time.time}
                </option>
              );
            })}
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            name='guests'
            value={bookingForm.guests}
            onChange={(e) =>
              setBookingForm({ ...bookingForm, guests: e.target.value })
            }
            required
          />
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            name='occasion'
            value={bookingForm.occasion}
            onChange={(e) =>
              setBookingForm({ ...bookingForm, occasion: e.target.value })
            }
            required
          >
            <option value=''>Select an occasion</option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
          <input
            disabled={!getIsFormValid()}
            type='submit'
            name='submit'
            value='Make Your Reservation'
            className='button button--primary'
          />
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
