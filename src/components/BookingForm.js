// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Styles
import './BookingForm.scss';

const BookingForm = ({ availableTimes, dispatch }) => {
  const times = availableTimes.map((time) => {
    return (
      <option key={time.id} value={time.value}>
        {time.value}
      </option>
    );
  });

  const occasions = [
    { id: '1', name: 'Birthday', value: 'birthday' },
    { id: '2', name: 'Anniversary', value: 'anniversary' },
  ].map((occasion) => {
    return (
      <option key={occasion.id} value={occasion.value}>
        {occasion.name}
      </option>
    );
  });

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
      <Formik
        initialValues={{ resDate: '', resTime: '', guests: 1, occasion: '' }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          resDate: Yup.string().required('Required'),
          resTime: Yup.string().required('Required'),
          guests: Yup.number()
            .min(1, 'Must reserve for 1 to 10 guests')
            .max(11, 'Must reserve for 1 to 10 guests')
            .required('Required'),
          occasion: Yup.string().required('Required'),
        })}
      >
        {(formik) => (
          <Form aria-label='booking-form' className='booking-form'>
            <h2>Reservation Form</h2>
            <fieldset>
              <legend className='visually-hidden'>
                Enter your reservation details
              </legend>
              <label htmlFor='resDate'>Date</label>
              <input
                id='resDate'
                type='date'
                data-testid='resDate'
                min={setMinDate()}
                required
                {...formik.getFieldProps('resDate')}
                onChange={(e) => {
                  dispatch({ type: 'SET_NEW_DATE', resDate: e.target.value });
                  formik.setFieldValue('resDate', e.target.value);
                }}
              />
              <ErrorMessage name='resDate' />

              <label htmlFor='resTime'>Time</label>
              <Field name='resTime' as='select' required>
                <option value=''>Select a time</option>
                {times}
              </Field>
              <ErrorMessage name='resTime' />

              <label htmlFor='guests'>Number of Guests</label>
              <Field
                name='guests'
                type='number'
                placeholder='1'
                min='1'
                max='10'
                required
              />
              <ErrorMessage name='guests' />

              <label htmlFor='occasion'>Occasion</label>
              <Field name='occasion' as='select' required>
                <option value=''>Occasion</option>
                {occasions}
              </Field>
              <ErrorMessage name='occasion' />

              <input
                type='submit'
                value='Make Your Reservation'
                className='button button--primary'
              />
            </fieldset>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm;
