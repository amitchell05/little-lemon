// React Tools
import { useState } from 'react';

// Styles
import './BookingForm.scss';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [resTime, setResTime] = useState('time');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('occasion');
  const [availableTimes] = useState([
    { id: '1', time: '17:00' },
    { id: '2', time: '18:00' },
    { id: '3', time: '19:00' },
    { id: '4', time: '20:00' },
    { id: '5', time: '21:00' },
    { id: '6', time: '21:00' },
  ]);

  const getIsFormValid = () => {
    return date && resTime !== 'time' && guests && occasion !== 'occasion';
  };

  const clearForm = () => {
    setDate('');
    setResTime('time');
    setGuests(1);
    setOccasion('occasion');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='booking-form'>
        <fieldset>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            name='res-date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            name='res-time'
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
          >
            <option value='time'>Select a time</option>
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
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            name='occasion'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value='occasion'>Select an occasion</option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
          <input
            disabled={!getIsFormValid()}
            type='submit'
            value='Make Your reservation'
          />
        </fieldset>
      </form>
    </>
  );
};

export default BookingForm;
