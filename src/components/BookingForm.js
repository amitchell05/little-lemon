// React Tools
// import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import './BookingForm.scss';

const validationSchema = Yup.object({
  resDate: Yup.string().required('Required'),
  resTime: Yup.string().required('Required'),
  guests: Yup.number()
    .required('Required')
    .moreThan(0, 'Reserve for 1 to 10 guests.')
    .lessThan(11, 'Reserve for 1 to 10 guests'),
  occasion: Yup.string().required('Required'),
});

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      resDate: '',
      resTime: '',
      guests: 1,
      occasion: '',
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: validationSchema,
  });

  // useEffect(() => {
  // }, [formik, dispatch]);

  // Resource: https://stackoverflow.com/questions/43274559/how-do-i-restrict-past-dates-in-html5-input-type-date
  const setMinDate = () => {
    // Current date
    const currentDate = new Date();

    // Current month
    let month = currentDate.getMonth() + 1;

    // Current day
    let day = currentDate.getDate();

    // Current year
    const year = currentDate.getFullYear();

    // Append 0 to front of month and day if less than 10 (ex. 05)
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    // Returns mininmum date for the date input in the form
    return `${year}-${month}-${day}`;
  };

  return (
    <section className='util-container'>
      <h2 className='visually-hidden'>Booking Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        aria-label='booking-form'
        className='booking-form'
      >
        <h2>Reservation Form</h2>
        <fieldset>
          <legend className='visually-hidden'>
            Enter your reservation details
          </legend>
          <label htmlFor='res-date'>Date</label>
          <input
            type='date'
            id='res-date'
            data-testid='res-date'
            name='res-date'
            min={setMinDate()}
            onChange={(e) => {
              dispatch({ type: 'SET_NEW_DATE', resDate: e.target.value });
              formik.setFieldValue('resDate', e.target.value);
            }}
            required
          />
          {formik.touched.resDate && formik.errors.resDate ? (
            <p>{formik.errors.resDate}</p>
          ) : null}
          <label htmlFor='res-time'>Time</label>
          <select
            id='res-time'
            name='res-time'
            data-testid='res-time'
            onChange={(e) => {
              formik.setFieldValue('resTime', e.target.value);
            }}
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
          {formik.touched.resTime && formik.errors.resTime ? (
            <p>{formik.errors.resTime}</p>
          ) : null}
          <label htmlFor='guests'>Number of Guests</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            name='guests'
            {...formik.getFieldProps('guests')}
            required
          />
          {formik.touched.guests && formik.errors.guests ? (
            <p>{formik.errors.guests}</p>
          ) : null}
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            name='occasion'
            {...formik.getFieldProps('occasion')}
            required
          >
            <option value=''>Select an occasion</option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <p>{formik.errors.occasion}</p>
          ) : null}
          <input
            disabled={!formik.isValid}
            type='submit'
            name='submit'
            value='Make Your Reservation'
            className='button button--primary'
          />
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
